/*
  Warnings:

  - You are about to drop the column `description` on the `experiences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "experiences" DROP COLUMN "description";

-- CreateTable
CREATE TABLE "experience_bullets" (
    "id" SERIAL NOT NULL,
    "experience_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_bullets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "experience_bullets_experience_id_display_order_idx" ON "experience_bullets"("experience_id", "display_order");

-- AddForeignKey
ALTER TABLE "experience_bullets" ADD CONSTRAINT "experience_bullets_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;
