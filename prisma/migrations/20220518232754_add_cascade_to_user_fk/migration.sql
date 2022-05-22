-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_owner_id_fkey";

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
