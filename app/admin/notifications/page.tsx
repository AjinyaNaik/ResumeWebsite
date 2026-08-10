import { requireAdmin } from "@/lib/auth";
import { getNotifications } from "@/lib/notifications";
import NotificationsList from "./NotificationList";

export default async function NotificationsPage() {
    const session = await requireAdmin();

    const notifications = await getNotifications(
        session.userId
    );

    return (
        <div className="p-6 md:p-10">
            <div className="mx-auto max-w-4xl">
                <NotificationsList
                    notifications={notifications}
                />
            </div>
        </div>
    );
}