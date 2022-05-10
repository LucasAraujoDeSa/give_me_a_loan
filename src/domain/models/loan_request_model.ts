import { User } from "./user_model"

interface Data {
  user: User,
  loan: Number,
  date: Date
}

export namespace CreateLoanRequestModel {
  export type Input = Data

  export type Output = {
    user_id: string,
    loan: Number,
    date: Date
  }
}
