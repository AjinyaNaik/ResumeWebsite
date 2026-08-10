"use server";

import { createMessage } from "@/lib/messages";
import { createNotification } from "@/lib/notifications";
import { getAdminUser } from "@/lib/users";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof message !== "string"
    ) {
        return {
            success: false,
            error: "Please fill in all required fields.",
        };
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
        return {
            success: false,
            error: "Please fill in all required fields.",
        };
    }

    const contactMessage= await createMessage({
        name: name.trim(),
        email: email.trim(),
        subject:
            typeof subject === "string" && subject.trim()
                ? subject.trim()
                : undefined,
        message: message.trim(),
    });

    const adminUser = await getAdminUser();
    if (!adminUser) {
    throw new Error("Admin user not found");
    }

    await createNotification({
    type: "CONTACT_MESSAGE",
    title: "New Contact Message",
    message: `${name.trim()} sent you a new message.`,
    userId: adminUser.id,
    messageId: contactMessage.id,
});

    return {
        success: true,
    };
}