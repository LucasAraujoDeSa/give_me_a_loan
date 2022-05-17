import { ErrorHandler } from "@/core/error/error_handler"
import {CreateLoanRequestModel} from "../models"

export class CreateLoanRequestEntity{
  public async request(
    input: CreateLoanRequestModel.Input
  ): Promise<CreateLoanRequestModel.Output> {

    if (input.loan > 1000000)
      throw new ErrorHandler(
        400,
        "Loan not permited, please choice a value lower than 1000000",
        "BadRequest"
      )

    input.user.loans.map(loan => {
      if (loan.status === "unpaid")
        throw new ErrorHandler(
          400,
          "Impossible request a new Loan, you have loan unpaid",
          "BadRequest"
        )
    })

    const user_id = input.user.id

    return {
      ...input,
      user_id
    }
  }
}
