import "server-only";
import { prisma } from "./prisma";

export async function getProfile() {
  return prisma.profile.findFirst();
}

export async function updateProfile(
  id: number,
  data: {
    name?: string;
    headline?: string | null;
    bio?: string | null;
    location?: string | null;
    profileImage?: string | null;
    resumeUrl?: string | null;
    email?: string | null;
    githubUrl?: string | null;
    linkedinUrl?: string | null;
  }
) {
  return prisma.profile.update({
    where: { id },
    data,
  });
}