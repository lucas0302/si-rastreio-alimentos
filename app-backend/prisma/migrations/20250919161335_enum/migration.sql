/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DailyShipmentReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MonthlyShipmentReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."role" AS ENUM ('admin', 'manager');

-- DropForeignKey
ALTER TABLE "public"."DailyShipmentReport" DROP CONSTRAINT "DailyShipmentReport_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DailyShipmentReport" DROP CONSTRAINT "DailyShipmentReport_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DailyShipmentReport" DROP CONSTRAINT "DailyShipmentReport_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."DailyShipmentReport" DROP CONSTRAINT "DailyShipmentReport_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."MonthlyShipmentReport" DROP CONSTRAINT "MonthlyShipmentReport_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."MonthlyShipmentReport" DROP CONSTRAINT "MonthlyShipmentReport_productId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_roleId_fkey";

-- DropTable
DROP TABLE "public"."Client";

-- DropTable
DROP TABLE "public"."DailyShipmentReport";

-- DropTable
DROP TABLE "public"."MonthlyShipmentReport";

-- DropTable
DROP TABLE "public"."Product";

-- DropTable
DROP TABLE "public"."Role";

-- DropTable
DROP TABLE "public"."User";

-- DropTable
DROP TABLE "public"."Vehicle";

-- CreateTable
CREATE TABLE "public"."user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "roleId" INTEGER NOT NULL,
    "role" "public"."role" NOT NULL DEFAULT 'manager',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(100) NOT NULL,
    "identificationCode" VARCHAR(255) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "unit" VARCHAR(10) NOT NULL,
    "quantity" DECIMAL(8,2) NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."vehicle" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "plate" VARCHAR(10) NOT NULL,
    "category" VARCHAR(20) NOT NULL,
    "brand" VARCHAR(30) NOT NULL,

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."daily_shipment_report" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "invoiceNumber" INTEGER NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL,
    "destination" VARCHAR(50) NOT NULL,
    "temperature" DECIMAL(65,30) NOT NULL,
    "sanitaryCondition" BOOLEAN NOT NULL,
    "deliverer" VARCHAR(100) NOT NULL,
    "userId" INTEGER NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "daily_shipment_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."monthly_shipment_report" (
    "id" SERIAL NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "destination" VARCHAR(50) NOT NULL,
    "temperature" DECIMAL(65,30) NOT NULL,
    "deliverer" VARCHAR(100) NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL,
    "shipmentDate" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "monthly_shipment_report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."daily_shipment_report" ADD CONSTRAINT "daily_shipment_report_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monthly_shipment_report" ADD CONSTRAINT "monthly_shipment_report_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monthly_shipment_report" ADD CONSTRAINT "monthly_shipment_report_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
