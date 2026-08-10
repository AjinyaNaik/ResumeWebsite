import Link from "next/link";
import { getMessages } from "@/lib/messages";
import MessagesList from "./MessageList";

export default async function MessagesPage() {
    const messages = await getMessages();

    return (
        <div className="p-6 md:p-10">
            <div className="mx-auto max-w-5xl">
                <MessagesList messages={messages} />
            </div>
        </div>
    );
}