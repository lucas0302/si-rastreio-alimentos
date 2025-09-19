/*
  Warnings:

  - You are about to drop the `Cargo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RelatorioExpedicaoDiaria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RelatorioExpedicaoMensal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Veiculo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" DROP CONSTRAINT "RelatorioExpedicaoDiaria_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" DROP CONSTRAINT "RelatorioExpedicaoDiaria_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" DROP CONSTRAINT "RelatorioExpedicaoDiaria_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" DROP CONSTRAINT "RelatorioExpedicaoDiaria_veiculoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RelatorioExpedicaoMensal" DROP CONSTRAINT "RelatorioExpedicaoMensal_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RelatorioExpedicaoMensal" DROP CONSTRAINT "RelatorioExpedicaoMensal_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Usuario" DROP CONSTRAINT "Usuario_cargoId_fkey";

-- DropTable
DROP TABLE "public"."Cargo";

-- DropTable
DROP TABLE "public"."Cliente";

-- DropTable
DROP TABLE "public"."Produto";

-- DropTable
DROP TABLE "public"."RelatorioExpedicaoDiaria";

-- DropTable
DROP TABLE "public"."RelatorioExpedicaoMensal";

-- DropTable
DROP TABLE "public"."Usuario";

-- DropTable
DROP TABLE "public"."Veiculo";

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" SERIAL NOT NULL,
    "role" VARCHAR(100) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(100) NOT NULL,
    "identificationCode" VARCHAR(255) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "unit" VARCHAR(10) NOT NULL,
    "quantity" DECIMAL(8,2) NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Vehicle" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "plate" VARCHAR(10) NOT NULL,
    "category" VARCHAR(20) NOT NULL,
    "brand" VARCHAR(30) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DailyShipmentReport" (
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

    CONSTRAINT "DailyShipmentReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MonthlyShipmentReport" (
    "id" SERIAL NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "destination" VARCHAR(50) NOT NULL,
    "temperature" DECIMAL(65,30) NOT NULL,
    "deliverer" VARCHAR(100) NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL,
    "shipmentDate" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "MonthlyShipmentReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyShipmentReport" ADD CONSTRAINT "DailyShipmentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyShipmentReport" ADD CONSTRAINT "DailyShipmentReport_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyShipmentReport" ADD CONSTRAINT "DailyShipmentReport_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DailyShipmentReport" ADD CONSTRAINT "DailyShipmentReport_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MonthlyShipmentReport" ADD CONSTRAINT "MonthlyShipmentReport_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MonthlyShipmentReport" ADD CONSTRAINT "MonthlyShipmentReport_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
