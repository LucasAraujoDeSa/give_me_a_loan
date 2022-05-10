import { User, CreateLoanRequestModel } from "@/domain/models"

export const LoanRequestMock = (user: User): CreateLoanRequestModel.Input => {
  return {
    user,
    date: new Date(Date.now()),
    loan: 1000
  }
}
