"use client";

import { useRouter } from "next/navigation";
import {
    markNotificationRead,
    markAllNotificationsRead,
    removeNotification,
} from "@/app/actions/notification";

type Notification = {
    id: number;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
};

type Props = {
    notifications: Notification[];
};

export default function NotificationsList({
    notifications,
}: Props) {
    const router = useRouter();

    async function handleMarkRead(id: number) {
        await markNotificationRead(id);
        router.refresh();
    }

    async function handleMarkAllRead() {
        await markAllNotificationsRead();
        router.refresh();
    }

    async function handleDelete(id: number) {
        await removeNotification(id);
        router.refresh();
    }

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead
    ).length;

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Notifications
                    </h1>

                    <p className="mt-1 text-muted-foreground">
                        {unreadCount} unread
                    </p>
                </div>

                {unreadCount > 0 && (
                    <button
                        onClick={handleMarkAllRead}
                        className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"
                    >
                        Mark all as read
                    </button>
                )}
            </div>

            <div className="overflow-hidden rounded-xl border bg-background">
                {notifications.length === 0 ? (
                    <p className="p-6 text-muted-foreground">
                        No notifications.
                    </p>
                ) : (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`border-b p-5 last:border-b-0 ${
                                !notification.isRead
                                    ? "bg-primary/5"
                                    : ""
                            }`}
                        >
                            <div className="flex gap-4">
                                {!notification.isRead && (
                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                                )}

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h2 className="font-semibold">
                                                {notification.title}
                                            </h2>

                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {notification.message}
                                            </p>
                                        </div>

                                        <span className="shrink-0 text-xs text-muted-foreground">
                                            {new Date(
                                                notification.createdAt
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <div className="mt-4 flex gap-2">
                                        {!notification.isRead && (
                                            <button
                                                onClick={() =>
                                                    handleMarkRead(
                                                        notification.id
                                                    )
                                                }
                                                className="rounded-md border px-3 py-1.5 text-xs hover:bg-muted"
                                            >
                                                Mark as read
                                            </button>
                                        )}

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    notification.id
                                                )
                                            }
                                            className="rounded-md border px-3 py-1.5 text-xs text-red-600 hover:bg-red-50"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}