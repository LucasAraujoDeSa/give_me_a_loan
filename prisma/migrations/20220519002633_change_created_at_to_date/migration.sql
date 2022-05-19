/*
  Warnings:

  - You are about to drop the column `created_at` on the `Loan` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Users` table. All the data in the column will be lost.
  - Added the required column `date` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "created_at",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "created_at",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
