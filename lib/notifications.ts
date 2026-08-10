import "server-only";
import { prisma } from "./prisma";

export async function createNotification(data: {
    type: "CONTACT_MESSAGE" | "SYSTEM";
    title: string;
    message: string;
    userId?: number;
    messageId?: number;
}) {
    return prisma.notification.create({
        data,
    });
}

export async function getNotifications(userId?: number) {
    return prisma.notification.findMany({
        where: userId
            ? {
                  userId,
              }
            : undefined,
        orderBy: {
            createdAt: "desc",
        },
        include: {
            contact: true,
        },
    });
}

export async function getUnreadNotifications(userId?: number) {
    return prisma.notification.findMany({
        where: {
            isRead: false,
            ...(userId ? { userId } : {}),
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            contact: true,
        },
    });
}

export async function getUnreadNotificationCount(
    userId?: number
) {
    return prisma.notification.count({
        where: {
            isRead: false,
            ...(userId ? { userId } : {}),
        },
    });
}

export async function getNotificationById(id: number) {
    return prisma.notification.findUnique({
        where: {
            id,
        },
        include: {
            contact: true,
            user: true,
        },
    });
}

export async function markNotificationAsRead(id: number) {
    return prisma.notification.update({
        where: {
            id,
        },
        data: {
            isRead: true,
        },
    });
}

export async function markAllNotificationsAsRead(
    userId?: number
) {
    return prisma.notification.updateMany({
        where: {
            isRead: false,
            ...(userId ? { userId } : {}),
        },
        data: {
            isRead: true,
        },
    });
}

export async function deleteNotification(id: number) {
    return prisma.notification.delete({
        where: {
            id,
        },
    });
}