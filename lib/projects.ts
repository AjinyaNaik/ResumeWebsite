import "server-only";
import { prisma } from "./prisma";

export async function getProjects() {
  return prisma.project.findMany({
    where: {
      isVisible: true,
    },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function getFeaturedProjects() {
  return prisma.project.findMany({
    where: {
      isVisible: true,
      isFeatured: true,
    },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function getAllProjects() {
  return prisma.project.findMany({
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function getProjectById(id: number) {
  return prisma.project.findUnique({
    where: { id },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
    },
  });
}

export async function createProject(data: {
  title: string;
  description?: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  displayOrder?: number;
  isFeatured?: boolean;
  isVisible?: boolean;
}) {
  return prisma.project.create({
    data,
  });
}

export async function updateProject(
  id: number,
  data: {
    title?: string;
    description?: string | null;
    image?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    displayOrder?: number;
    isFeatured?: boolean;
    isVisible?: boolean;
  }
) {
  return prisma.project.update({
    where: { id },
    data,
  });
}

export async function deleteProject(id: number) {
  return prisma.project.delete({
    where: { id },
  });
}