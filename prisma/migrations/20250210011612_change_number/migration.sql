/*
  Warnings:

  - You are about to alter the column `pvto_port_server` on the `server` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `server` MODIFY `pvto_port_server` INTEGER NOT NULL;
