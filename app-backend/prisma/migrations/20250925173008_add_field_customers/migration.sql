/*
  Warnings:

  - You are about to drop the column `payment` on the `customers` table. All the data in the column will be lost.
  - Added the required column `State` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `legalName` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethod` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentTern` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateRegistration` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."customers" DROP COLUMN "payment",
ADD COLUMN     "State" VARCHAR(255) NOT NULL,
ADD COLUMN     "city" VARCHAR(255) NOT NULL,
ADD COLUMN     "email" VARCHAR(100) NOT NULL,
ADD COLUMN     "legalName" VARCHAR(255) NOT NULL,
ADD COLUMN     "paymentMethod" VARCHAR(255) NOT NULL,
ADD COLUMN     "paymentTern" VARCHAR(255) NOT NULL,
ADD COLUMN     "stateRegistration" VARCHAR(255) NOT NULL;
