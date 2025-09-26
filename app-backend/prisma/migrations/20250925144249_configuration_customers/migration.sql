/*
  Warnings:

  - You are about to drop the column `cpf` on the `customers` table. All the data in the column will be lost.
  - Added the required column `payment` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."customers" DROP COLUMN "cpf",
ADD COLUMN     "payment" VARCHAR(255) NOT NULL;
