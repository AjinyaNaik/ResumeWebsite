"use client";

import { useRouter } from "next/navigation";
import { logoutAdmin } from "@/app/actions/auth";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await logoutAdmin();

        router.push("/admin/login");
        router.refresh();
    }

    return (
        <button
            onClick={handleLogout}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
            Log out
        </button>
    );
}