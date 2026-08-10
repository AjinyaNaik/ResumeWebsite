import "server-only";
import { prisma } from "./prisma";

export async function getEducation() {
    return prisma.education.findMany({
        where: {
            isVisible: true,
        },
        orderBy: {
            displayOrder: "asc",
        },
    });
}

export async function getAllEducation() {
    return prisma.education.findMany({
        orderBy: {
            displayOrder: "asc",
        },
    });
}

export async function getEducationById(id: number) {
    return prisma.education.findUnique({
        where: {
            id,
        },
    });
}

export async function createEducation(data: {
    institution: string;
    degree: string;
    field?: string;
    location?: string;
    startDate: Date;
    endDate?: Date | null;
    description?: string;
    logo?: string;
    displayOrder?: number;
    isVisible?: boolean;
}) {
    return prisma.education.create({
        data,
    });
}

export async function updateEducation(
    id: number,
    data: {
        institution?: string;
        degree?: string;
        field?: string | null;
        location?: string | null;
        startDate?: Date;
        endDate?: Date | null;
        description?: string | null;
        logo?: string | null;
        displayOrder?: number;
        isVisible?: boolean;
    }
) {
    return prisma.education.update({
        where: {
            id,
        },
        data,
    });
}

export async function deleteEducation(id: number) {
    return prisma.education.delete({
        where: {
            id,
        },
    });
}