import "server-only";
import { prisma } from "./prisma";

export async function getAchievements() {
    return prisma.achievement.findMany({
        where: {
            isVisible: true,
        },
        orderBy: {
            displayOrder: "asc",
        },
    });
}

export async function getAllAchievements() {
    return prisma.achievement.findMany({
        orderBy: {
            displayOrder: "asc",
        },
    });
}

export async function getAchievementById(id: number) {
    return prisma.achievement.findUnique({
        where: {
            id,
        },
    });
}

export async function createAchievement(data: {
    title: string;
    description?: string;
    organization?: string;
    date?: Date;
    url?: string;
    image?: string;
    displayOrder?: number;
    isVisible?: boolean;
}) {
    return prisma.achievement.create({
        data,
    });
}

export async function updateAchievement(
    id: number,
    data: {
        title?: string;
        description?: string | null;
        organization?: string | null;
        date?: Date | null;
        url?: string | null;
        image?: string | null;
        displayOrder?: number;
        isVisible?: boolean;
    }
) {
    return prisma.achievement.update({
        where: {
            id,
        },
        data,
    });
}

export async function deleteAchievement(id: number) {
    return prisma.achievement.delete({
        where: {
            id,
        },
    });
}