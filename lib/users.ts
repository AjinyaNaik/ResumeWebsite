import "server-only";
import { prisma } from "./prisma";

export async function getAdminUser() {
    return prisma.user.findFirst({
        where: {
            role: "ADMIN",
        },
    });
}