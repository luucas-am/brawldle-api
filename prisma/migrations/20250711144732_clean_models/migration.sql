/*
  Warnings:

  - You are about to drop the `Brawler` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Brawler";

-- DropTable
DROP TABLE "Game";

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "mode" "GameMode" NOT NULL,
    "description" TEXT,
    "brawlerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brawlers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "brawlers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_brawlerId_fkey" FOREIGN KEY ("brawlerId") REFERENCES "brawlers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
