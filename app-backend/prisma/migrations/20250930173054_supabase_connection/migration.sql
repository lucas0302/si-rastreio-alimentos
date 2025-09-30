/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `code` on the `product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."daily_shipment_report" DROP CONSTRAINT "daily_shipment_report_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."monthly_shipment_report" DROP CONSTRAINT "monthly_shipment_report_productId_fkey";

-- AlterTable
ALTER TABLE "public"."product" DROP CONSTRAINT "product_pkey",
DROP COLUMN "code",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monthly_shipment_report" ADD CONSTRAINT "monthly_shipment_report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
