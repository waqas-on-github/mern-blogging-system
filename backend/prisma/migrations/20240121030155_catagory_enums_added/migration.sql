/*
  Warnings:

  - Added the required column `postId` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Lifestyle', 'Travel', 'Technology', 'Fashion', 'FoodAndCooking', 'Parenting', 'PersonalFinance', 'HomeDecor', 'Fitness', 'BeautyAndSkincare', 'CareerAndProfessionalDevelopment', 'Education', 'BookReviews', 'PersonalDevelopment', 'Photography', 'Entertainment', 'DIYAndCrafts', 'Gaming', 'Pets', 'SocialIssues');

-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
