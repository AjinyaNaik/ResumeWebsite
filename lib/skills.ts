import "server-only";
import { prisma } from "./prisma";

export async function getSkills() {
  return prisma.skill.findMany({
    where: {
      isVisible: true,
    },
    orderBy: [
      {
        category: "asc",
      },
      {
        displayOrder: "asc",
      },
    ],
  });
}

export async function getAllSkills() {
  return prisma.skill.findMany({
    orderBy: [
      {
        category: "asc",
      },
      {
        displayOrder: "asc",
      },
    ],
  });
}

export async function getSkillsByCategory(category: string) {
  return prisma.skill.findMany({
    where: {
      category,
      isVisible: true,
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function createSkill(data: {
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
  displayOrder?: number;
  isVisible?: boolean;
}) {
  return prisma.skill.create({
    data,
  });
}

export async function updateSkill(
  id: number,
  data: {
    name?: string;
    category?: string;
    icon?: string | null;
    proficiency?: number | null;
    displayOrder?: number;
    isVisible?: boolean;
  }
) {
  return prisma.skill.update({
    where: { id },
    data,
  });
}

export async function deleteSkill(id: number) {
  return prisma.skill.delete({
    where: { id },
  });
}