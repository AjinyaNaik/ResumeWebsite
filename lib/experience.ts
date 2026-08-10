import "server-only";
import { prisma } from "./prisma";

export async function getExperiences() {
    return prisma.experience.findMany({
        where: {
            isVisible: true,
        },
        include: {
            bullets: {
                orderBy: {
                    displayOrder: "asc",
                },
            },
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
            bullets: {
                orderBy: {
                    displayOrder: "asc",
                },
            },
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
            bullets: {
                orderBy: {
                    displayOrder: "asc",
                },
            },
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
    companyLogo?: string;
    displayOrder?: number;
    isVisible?: boolean;
    bullets?: {
        content: string;
        displayOrder?: number;
    }[];
}) {
    return prisma.experience.create({
        data: {
            company: data.company,
            position: data.position,
            location: data.location,
            startDate: data.startDate,
            endDate: data.endDate,
            companyLogo: data.companyLogo,
            displayOrder: data.displayOrder,
            isVisible: data.isVisible,

            bullets: data.bullets
                ? {
                      create: data.bullets.map((bullet, index) => ({
                          content: bullet.content,
                          displayOrder: bullet.displayOrder ?? index,
                      })),
                  }
                : undefined,
        },

        include: {
            bullets: {
                orderBy: {
                    displayOrder: "asc",
                },
            },
        },
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