import {
  SaveLoanRequestRepository,
  GetUserByIdRepository
} from "../contracts"
import { CreateLoanRequestEntity } from "../../domain/entities/create_loan_request_entity"
import { CreateLoanRequestDto } from "../dtos/create_loan_request_dto"
import { ErrorHandler } from "@/core/error/error_handler"

export class CreateLoanRequest{

  private _createLoanRequestEntity = new CreateLoanRequestEntity()

  constructor(
    private _getUserById: GetUserByIdRepository,
    private _saveLoanRequest: SaveLoanRequestRepository
  ){}

  public async execute({
    loan,
    user_id
  }: CreateLoanRequestDto): Promise<void> {

    const user = await this._getUserById.get(user_id)

    if(!user){
      throw new ErrorHandler(
        404,
        "user not found or exist",
        "not found"
      )
    }

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
