import "server-only";
import { prisma } from "./prisma";

export async function getExperiences() {
  return prisma.experience.findMany({
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

export async function getAllExperiences() {
  return prisma.experience.findMany({
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

export async function getExperienceById(id: number) {
  return prisma.experience.findUnique({
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

export async function createExperience(data: {
  company: string;
  position: string;
  location?: string;
  startDate: Date;
  endDate?: Date | null;
  description?: string;
  companyLogo?: string;
  displayOrder?: number;
  isVisible?: boolean;
}) {
  return prisma.experience.create({
    data,
  });
}

export async function updateExperience(
  id: number,
  data: {
    company?: string;
    position?: string;
    location?: string | null;
    startDate?: Date;
    endDate?: Date | null;
    description?: string | null;
    companyLogo?: string | null;
    displayOrder?: number;
    isVisible?: boolean;
  }
) {
  return prisma.experience.update({
    where: { id },
    data,
  });
}

export async function deleteExperience(id: number) {
  return prisma.experience.delete({
    where: { id },
  });
}