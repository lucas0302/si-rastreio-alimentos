/*
  Warnings:

  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `product` table. All the data in the column will be lost.
  - Added the required column `expiration_unit` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `expiration` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."daily_shipment_report" DROP CONSTRAINT "daily_shipment_report_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."monthly_shipment_report" DROP CONSTRAINT "monthly_shipment_report_productId_fkey";

-- AlterTable
ALTER TABLE "public"."product" DROP CONSTRAINT "product_pkey",
DROP COLUMN "id",
ADD COLUMN     "code" SERIAL NOT NULL,
ADD COLUMN     "expiration_unit" VARCHAR(10) NOT NULL,
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "weight" DECIMAL(10,2) NOT NULL,
DROP COLUMN "expiration",
ADD COLUMN     "expiration" DECIMAL(5,2) NOT NULL,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("code");

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monthly_shipment_report" ADD CONSTRAINT "monthly_shipment_report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
