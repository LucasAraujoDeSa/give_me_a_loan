import { SaveLoanRequestRepository, SaveLoanRequestRepositoryInput } from "@/modules/loan/application/contracts"
import { User } from "@/modules/loan/domain/models"
import prisma from "../../client"

export class SaveLoanRequestRepositoryImpl implements SaveLoanRequestRepository {
  private _client = prisma

  public async save({
    date,
    loan,
    status,
    user_id
  }: SaveLoanRequestRepositoryInput): Promise<void> {

    await this._client.loan.create({
      data: {
        date,
        loan,
        owner_id: user_id,
        status
      }
    })

  }
}
