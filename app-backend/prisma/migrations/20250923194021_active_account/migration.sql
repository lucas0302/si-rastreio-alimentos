/*
  Warnings:

  - You are about to drop the column `clientId` on the `daily_shipment_report` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `monthly_shipment_report` table. All the data in the column will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customersId` to the `daily_shipment_report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customersId` to the `monthly_shipment_report` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."daily_shipment_report" DROP CONSTRAINT "daily_shipment_report_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."monthly_shipment_report" DROP CONSTRAINT "monthly_shipment_report_clientId_fkey";

-- AlterTable
ALTER TABLE "public"."daily_shipment_report" DROP COLUMN "clientId",
ADD COLUMN     "customersId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."monthly_shipment_report" DROP COLUMN "clientId",
ADD COLUMN     "customersId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "public"."client";

-- CreateTable
CREATE TABLE "public"."customers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(100) NOT NULL,
    "identificationCode" VARCHAR(255) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_customersId_fkey" FOREIGN KEY ("customersId") REFERENCES "public"."customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monthly_shipment_report" ADD CONSTRAINT "monthly_shipment_report_customersId_fkey" FOREIGN KEY ("customersId") REFERENCES "public"."customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
