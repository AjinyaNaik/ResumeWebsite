import "server-only";
import { prisma } from "./prisma";

export async function createMessage(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  return prisma.message.create({
    data,
  });
}

export async function getMessages() {
  return prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getUnreadMessages() {
  return prisma.message.findMany({
    where: {
      status: "UNREAD",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getMessageById(id: number) {
  return prisma.message.findUnique({
    where: { id },
    include: {
      notifications: true,
    },
  });
}

export async function markMessageAsRead(id: number) {
  return prisma.message.update({
    where: { id },
    data: {
      status: "READ",
    },
  });
}

export async function archiveMessage(id: number) {
  return prisma.message.update({
    where: { id },
    data: {
      status: "ARCHIVED",
    },
  });
}

export async function deleteMessage(id: number) {
  return prisma.message.delete({
    where: { id },
  });
}