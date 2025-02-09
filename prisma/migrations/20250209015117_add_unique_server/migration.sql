/*
  Warnings:

  - A unique constraint covering the columns `[processid_server]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[port_server]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[datasource_server]` on the table `Server` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[databasename_server]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Server_processid_server_key` ON `Server`(`processid_server`);

-- CreateIndex
CREATE UNIQUE INDEX `Server_port_server_key` ON `Server`(`port_server`);

-- CreateIndex
CREATE UNIQUE INDEX `Server_datasource_server_key` ON `Server`(`datasource_server`);

-- CreateIndex
CREATE UNIQUE INDEX `Server_databasename_server_key` ON `Server`(`databasename_server`);
