import {
  SaveLoanRequestRepository,
  GetUserByIdRepository
} from "../contracts"
import { CreateLoanRequestEntity } from "../../domain/entities/create_loan_request_entity"

export namespace CreateLoanRequest{
  export type Input = {
    loan: number,
    user_id: string
  }

}

export class CreateLoanRequest{

  private _createLoanRequestEntity = new CreateLoanRequestEntity()

  constructor(
    private _getUserById: GetUserByIdRepository,
    private _saveLoanRequest: SaveLoanRequestRepository
  ){}

  public async execute({
    loan,
    user_id
  }: CreateLoanRequest.Input): Promise<void> {

    const user = await this._getUserById.get(user_id)

    const loan_request = await this._createLoanRequestEntity.request({
      user,
      date: new Date(),
      loan
    })

    await this._saveLoanRequest.save({
      date: loan_request.date,
      loan: loan_request.loan,
      status: "on going",
      user_id: loan_request.user_id
    })

  }
}
