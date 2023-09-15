/*
  Warnings:

  - The `img` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "img",
ADD COLUMN     "img" TEXT[];

-- CreateTable
CREATE TABLE "BannerContent" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "imgWidth" INTEGER NOT NULL,
    "imgHeight" INTEGER NOT NULL,
    "numberOfDiscountDate" INTEGER NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "BannerContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "imgWidth" INTEGER NOT NULL,
    "imgHeight" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FooterLink" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "FooterLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FooterLinks" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "FooterLinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FooterLink_title_key" ON "FooterLink"("title");

-- AddForeignKey
ALTER TABLE "FooterLinks" ADD CONSTRAINT "FooterLinks_title_fkey" FOREIGN KEY ("title") REFERENCES "FooterLink"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
