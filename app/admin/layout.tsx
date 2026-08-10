import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import LogoutButton from "./LogOutButton";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await requireAdmin();

    return (
        <div className="min-h-screen bg-muted/30">
            <div className="flex min-h-screen">
                <aside className="hidden w-64 border-r bg-background md:block">
                    <div className="p-6">
                        <Link
                            href="/admin"
                            className="text-xl font-bold"
                        >
                            Portfolio Admin
                        </Link>
                    </div>

                    <nav className="space-y-1 px-3">
                        <Link
                            href="/admin"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/admin/messages"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Messages
                        </Link>

                        <Link
                            href="/admin/notifications"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Notifications
                        </Link>

                        <div className="my-4 border-t" />

                        <Link
                            href="/admin/experience"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Experience
                        </Link>

                        <Link
                            href="/admin/skills"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Skills
                        </Link>

                        <Link
                            href="/admin/projects"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/admin/education"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Education
                        </Link>

                        <Link
                            href="/admin/achievements"
                            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                        >
                            Achievements
                        </Link>
                    </nav>

                    <div className="absolute bottom-0 w-64 border-t p-4">
                        <p className="truncate text-xs text-muted-foreground">
                            {session.email}
                        </p>
                        <LogoutButton />
                    </div>
                </aside>

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}