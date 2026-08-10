"use client";

import { useRouter } from "next/navigation";
import {
markMessageRead,
archiveMessageAction,
removeMessage,
} from "@/app/actions/messages";

type Message = {
id: number;
name: string;
email: string;
subject: string | null;
message: string;
status: "UNREAD" | "READ" | "ARCHIVED";
createdAt: Date;
};

type MessagesListProps = {
messages: Message[];
};

export default function MessagesList({
messages,
}: MessagesListProps) {
const router = useRouter();


async function handleMarkRead(id: number) {
    await markMessageRead(id);
    router.refresh();
}

async function handleArchive(id: number) {
    await archiveMessageAction(id);
    router.refresh();
}

async function handleDelete(id: number) {
    const confirmed = window.confirm(
        "Are you sure you want to delete this message?"
    );

    if (!confirmed) {
        return;
    }

    await removeMessage(id);
    router.refresh();
}

if (messages.length === 0) {
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Messages
            </h1>

            <div className="mt-6 rounded-xl border p-8 text-center text-muted-foreground">
                No messages yet.
            </div>
        </div>
    );
}

return (
    <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold">
                Messages
            </h1>

            <p className="mt-1 text-muted-foreground">
                {messages.filter(
                    (message) => message.status === "UNREAD"
                ).length}{" "}
                unread message
                {messages.filter(
                    (message) => message.status === "UNREAD"
                ).length !== 1
                    ? "s"
                    : ""}
            </p>
        </div>

        <div className="space-y-4">
            {messages.map((message) => (
                <article
                    key={message.id}
                    className={`rounded-xl border p-5 ${
                        message.status === "UNREAD"
                            ? "bg-primary/5"
                            : "bg-background"
                    }`}
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                            <div className="flex items-center gap-3">
                                {message.status === "UNREAD" && (
                                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                                )}

                                <h2 className="font-semibold">
                                    {message.subject ||
                                        "No subject"}
                                </h2>
                            </div>

                            <div className="mt-2 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground">
                                    {message.name}
                                </span>{" "}
                                ·{" "}
                                <a
                                    href={`mailto:${message.email}`}
                                    className="hover:underline"
                                >
                                    {message.email}
                                </a>
                            </div>
                        </div>

                        <span className="shrink-0 text-xs text-muted-foreground">
                            {new Date(
                                message.createdAt
                            ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                    </div>

                    <p className="mt-4 whitespace-pre-wrap leading-relaxed text-muted-foreground">
                        {message.message}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {message.status === "UNREAD" && (
                            <button
                                onClick={() =>
                                    handleMarkRead(message.id)
                                }
                                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
                            >
                                Mark as read
                            </button>
                        )}

                        {message.status !== "ARCHIVED" && (
                            <button
                                onClick={() =>
                                    handleArchive(message.id)
                                }
                                className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
                            >
                                Archive
                            </button>
                        )}

                        <a
                            href={`mailto:${message.email}?subject=${encodeURIComponent(
                                message.subject
                                    ? `Re: ${message.subject}`
                                    : "Re: Your message"
                            )}`}
                            className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted"
                        >
                            Reply
                        </a>

                        <button
                            onClick={() =>
                                handleDelete(message.id)
                            }
                            className="rounded-md border px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
                        >
                            Delete
                        </button>
                    </div>
                </article>
            ))}
        </div>
    </div>
)};
