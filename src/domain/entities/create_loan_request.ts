import {CreateLoanRequestModel} from "../models"

export class CreateLoanRequest{
  public async request(
    input: CreateLoanRequestModel.Input
  ): Promise<CreateLoanRequestModel.Output> {

    if (input.loan > 1000000)
      throw new Error(
        "Loan not permited, please choice a value lower than 1000000"
      )

    input.user.loans.map(loan => {
      if (loan.status === "unpaid")
        throw new Error(
          "Impossible request a new Loan, you have loan unpaid"
        )
    })

    const user_id = input.user.id

    return {
      ...input,
      user_id
    }
  }
}
