-- CreateTable
CREATE TABLE "daily_brawlers" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "brawlerId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "daily_brawlers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "daily_brawlers_date_key" ON "daily_brawlers"("date");

-- AddForeignKey
ALTER TABLE "daily_brawlers" ADD CONSTRAINT "daily_brawlers_brawlerId_fkey" FOREIGN KEY ("brawlerId") REFERENCES "brawlers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
