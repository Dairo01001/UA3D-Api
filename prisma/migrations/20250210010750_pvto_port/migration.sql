/*
  Warnings:

  - You are about to drop the column `processid_server` on the `server` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pvto_port_server]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pvto_port_server` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Server_processid_server_key` ON `server`;

-- AlterTable
ALTER TABLE `server` DROP COLUMN `processid_server`,
    ADD COLUMN `pvto_port_server` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Server_pvto_port_server_key` ON `Server`(`pvto_port_server`);
