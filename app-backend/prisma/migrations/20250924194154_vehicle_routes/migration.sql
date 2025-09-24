/*
  Warnings:

  - You are about to drop the `vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."daily_shipment_report" DROP CONSTRAINT "daily_shipment_report_vehicleId_fkey";

-- DropTable
DROP TABLE "public"."vehicle";

-- CreateTable
CREATE TABLE "public"."vehicles" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "plate" VARCHAR(10) NOT NULL,
    "category" VARCHAR(20) NOT NULL,
    "brand" VARCHAR(30) NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
