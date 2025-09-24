/*
  Warnings:

  - The values [manager] on the enum `role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."role_new" AS ENUM ('admin', 'user');
ALTER TABLE "public"."users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."users" ALTER COLUMN "role" TYPE "public"."role_new" USING ("role"::text::"public"."role_new");
ALTER TYPE "public"."role" RENAME TO "role_old";
ALTER TYPE "public"."role_new" RENAME TO "role";
DROP TYPE "public"."role_old";
ALTER TABLE "public"."users" ALTER COLUMN "role" SET DEFAULT 'user';
COMMIT;

-- AlterTable
ALTER TABLE "public"."daily_shipment_report" ALTER COLUMN "destination" SET DATA TYPE VARCHAR(60);

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "role" SET DEFAULT 'user';
