import "server-only";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secret = process.env.AUTH_SECRET;

if (!secret) {
    throw new Error("AUTH_SECRET is not defined");
}

const secretKey = new TextEncoder().encode(secret);

type SessionPayload = {
    userId: number;
    email: string;
    role: "ADMIN";
};

export async function createSession(user: {
    id: number;
    email: string;
    role: "ADMIN";
}) {
    const token = await new SignJWT({
        userId: user.id,
        email: user.email,
        role: user.role,
    })
        .setProtectedHeader({
            alg: "HS256",
        })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secretKey);

    const cookieStore = await cookies();

    cookieStore.set("admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60,
    });
}

export async function getSession(): Promise<SessionPayload | null> {
    const cookieStore = await cookies();

    const token = cookieStore.get("admin_session")?.value;

    if (!token) {
        return null;
    }

    try {
        const { payload } = await jwtVerify(token, secretKey);

        if (
            typeof payload.userId !== "number" ||
            typeof payload.email !== "string" ||
            payload.role !== "ADMIN"
        ) {
            return null;
        }

        return {
            userId: payload.userId,
            email: payload.email,
            role: "ADMIN",
        };
    } catch {
        return null;
    }
}

export async function requireAdmin() {
    const session = await getSession();

    if (!session || session.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    return session;
}

export async function destroySession() {
    const cookieStore = await cookies();

    cookieStore.delete("admin_session");
}