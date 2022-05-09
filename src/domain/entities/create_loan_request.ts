interface Loan {
  date: Date,
  status: string
}

interface User {
  user_name: string,
  loans: Array<Loan>
}

interface Data {
  user: User,
  loan: Number,
  date: Date
}

export namespace CreateLoanRequest {
  export type Input = Data

  export type Output = Data
}

export class CreateLoanRequest{
  public async request(
    input: CreateLoanRequest.Input
  ): Promise<CreateLoanRequest.Output> {

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

    return {
      ...input
    }
  }
}
