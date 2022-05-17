import { CreateLoanRequest } from "@/modules/loan/application/use_cases/create_loan_request"
import {
  SaveLoanRequestDatabaseInMemory,
  GetUserByIdDatabaseInMemory
} from "./database_in_memory"

const makeSut = () => {
  const saveLoanRequest = new SaveLoanRequestDatabaseInMemory()
  const getUserById = new GetUserByIdDatabaseInMemory()
  const sut = new CreateLoanRequest(
    getUserById,
    saveLoanRequest
  )
  return {
    sut,
    getUserById,
    saveLoanRequest
  }
}
describe('==> create loan request', () => {
  it('should request a loan', async () => {
    const { sut } = makeSut()

    // inputs
    const input = {
      loan: 1000,
      user_id: "id"
    }

    const testSpy = jest.spyOn(sut, "execute")
    await sut.execute(input)

    expect(testSpy).toHaveBeenCalled()
  });

  it('should save a request at database with status on going', async () => {
    const { sut, saveLoanRequest } = makeSut()

    // inputs
    const input = {
      loan: 1000,
      user_id: "id"
    }

    const testSpy = jest.spyOn(saveLoanRequest, "save")
    await sut.execute(input)

    expect(testSpy).toHaveBeenCalledWith({
      status: "on going",
      loan: input.loan,
      user_id: input.user_id,
      date: saveLoanRequest.date
    })
  });
});
