-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ONGOING', 'ACTIVE', 'UNPAID', 'PAID');

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "loan" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'ONGOING',
    "owner_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
