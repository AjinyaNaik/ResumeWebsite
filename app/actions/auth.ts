"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession, destroySession } from "@/lib/auth";

export async function loginAdmin(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (
        typeof email !== "string" ||
        typeof password !== "string"
    ) {
        return {
            success: false,
            error: "Invalid email or password.",
        };
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email.trim().toLowerCase(),
        },
    });

    if (!user || user.role !== "ADMIN") {
        return {
            success: false,
            error: "Invalid email or password.",
        };
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.passwordHash
    );

    if (!passwordMatches) {
        return {
            success: false,
            error: "Invalid email or password.",
        };
    }

    await createSession({
        id: user.id,
        email: user.email,
        role: user.role,
    });

    return {
        success: true,
    };
}

export async function logoutAdmin() {
    await destroySession();
}