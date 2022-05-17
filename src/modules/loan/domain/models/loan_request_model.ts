import { User } from "./user_model"

interface Data {
  user: User,
  loan: number,
  date: Date
}

export namespace CreateLoanRequestModel {
  export type Input = Data

  export type Output = {
    user_id: string,
    loan: number,
    date: Date
  }
}
