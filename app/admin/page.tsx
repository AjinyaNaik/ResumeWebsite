import Link from "next/link";
import {
    getMessages,
    getUnreadMessageCount,
} from "@/lib/messages";
import {
    getNotifications,
    getUnreadNotificationCount,
} from "@/lib/notifications";
import { requireAdmin } from "@/lib/auth";

export default async function AdminPage() {
    const session = await requireAdmin();

    const [
        unreadMessages,
        unreadNotifications,
        messages,
        notifications,
    ] = await Promise.all([
        getUnreadMessageCount(),
        getUnreadNotificationCount(session.userId),
        getMessages(),
        getNotifications(session.userId),
    ]);

    const recentMessages = messages.slice(0, 5);
    const recentNotifications = notifications.slice(0, 5);

    return (
        <div className="p-6 md:p-10">
            <div className="mb-8">
                <p className="text-sm text-muted-foreground">
                    Admin Dashboard
                </p>

                <h1 className="mt-1 text-3xl font-bold">
                    Welcome back
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Manage your portfolio and messages.
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2">
                <Link
                    href="/admin/messages"
                    className="rounded-xl border bg-background p-6 transition hover:shadow-md"
                >
                    <p className="text-sm text-muted-foreground">
                        Unread Messages
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {unreadMessages}
                    </p>
                </Link>

                <Link
                    href="/admin/notifications"
                    className="rounded-xl border bg-background p-6 transition hover:shadow-md"
                >
                    <p className="text-sm text-muted-foreground">
                        Unread Notifications
                    </p>

                    <p className="mt-2 text-3xl font-bold">
                        {unreadNotifications}
                    </p>
                </Link>
            </div>

            {/* Recent Messages */}
            <div className="mt-10">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Recent Messages
                    </h2>

                    <Link
                        href="/admin/messages"
                        className="text-sm font-medium text-primary hover:underline"
                    >
                        View all →
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border bg-background">
                    {recentMessages.length === 0 ? (
                        <p className="p-6 text-sm text-muted-foreground">
                            No messages yet.
                        </p>
                    ) : (
                        recentMessages.map((message) => (
                            <Link
                                key={message.id}
                                href={`/admin/messages/${message.id}`}
                                className="block border-b p-5 last:border-b-0 hover:bg-muted/50"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-medium">
                                            {message.name}
                                        </p>

                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {message.subject ||
                                                "No subject"}
                                        </p>
                                    </div>

                                    <span className="text-xs text-muted-foreground">
                                        {new Date(
                                            message.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </div>

                                <p className="mt-2 line-clamp-1 text-sm text-muted-foreground">
                                    {message.message}
                                </p>
                            </Link>
                        ))
                    )}
                </div>
            </div>

            {/* Recent Notifications */}
            <div className="mt-10">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                        Recent Notifications
                    </h2>

                    <Link
                        href="/admin/notifications"
                        className="text-sm font-medium text-primary hover:underline"
                    >
                        View all →
                    </Link>
                </div>

                <div className="overflow-hidden rounded-xl border bg-background">
                    {recentNotifications.length === 0 ? (
                        <p className="p-6 text-sm text-muted-foreground">
                            No notifications yet.
                        </p>
                    ) : (
                        recentNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`border-b p-5 last:border-b-0 ${
                                    !notification.isRead
                                        ? "bg-primary/5"
                                        : ""
                                }`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-medium">
                                            {notification.title}
                                        </p>

                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {notification.message}
                                        </p>
                                    </div>

                                    {!notification.isRead && (
                                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}