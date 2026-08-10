"use server";

import { requireAdmin } from "@/lib/auth";
import {
    markNotificationAsRead,
    markAllNotificationsAsRead,
    deleteNotification,
} from "@/lib/notifications";

export async function markNotificationRead(id: number) {
    await requireAdmin();

    await markNotificationAsRead(id);

    return {
        success: true,
    };
}

export async function markAllNotificationsRead() {
    await requireAdmin();

    await markAllNotificationsAsRead();

    return {
        success: true,
    };
}
export async function removeNotification(id: number) {
    await requireAdmin();

    await deleteNotification(id);

    return {
        success: true,
    };
}