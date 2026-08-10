"use server";

import { requireAdmin } from "@/lib/auth";
import {
    markMessageAsRead,
    archiveMessage,
    deleteMessage,
    getMessageById,
} from "@/lib/messages";
import { prisma } from "@/lib/prisma";

export async function markMessageRead(id: number) {
    await requireAdmin();

    await markMessageAsRead(id);

    // Also mark related notifications as read
    await prisma.notification.updateMany({
        where: {
            messageId: id,
        },
        data: {
            isRead: true,
        },
    });

    return {
        success: true,
    };
}

export async function archiveMessageAction(id: number) {
    await requireAdmin();

    await archiveMessage(id);

    await prisma.notification.updateMany({
        where: {
            messageId: id,
        },
        data: {
            isRead: true,
        },
    });

    return {
        success: true,
    };
}

export async function removeMessage(id: number) {
    await requireAdmin();

    await deleteMessage(id);

    return {
        success: true,
    };
}