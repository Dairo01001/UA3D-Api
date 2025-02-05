/*
  Warnings:

  - A unique constraint covering the columns `[gridname_server]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Server_gridname_server_key` ON `Server`(`gridname_server`);
