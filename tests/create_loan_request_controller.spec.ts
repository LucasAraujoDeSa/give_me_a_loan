import {
  CreateLoanRequestController
} from "@/modules/loan/application/controllers/create_loan_request_controller"
import {
  CreateLoanRequest
} from "@/modules/loan/application/use_cases/create_loan_request"
import {
  GetUserByIdDatabaseInMemory,
  SaveLoanRequestDatabaseInMemory
} from "@/tests/database_in_memory"


const makeSut = () => {
  const getUserById = new GetUserByIdDatabaseInMemory()
  const saveLoanRequest = new SaveLoanRequestDatabaseInMemory()
  const create_loan_request = new CreateLoanRequest(
    getUserById,
    saveLoanRequest
  )
  const sut = new CreateLoanRequestController(create_loan_request)

  return {
    sut,
    create_loan_request
  }
}


describe('==> create loan request controller', () => {
  it('should return 201 if request creation success', async () => {
    const { sut } = makeSut()

    // input
    const data = {
      loan: 10000,
      user_id: "id"
    }

    const test = await sut.handle(data)

    expect(test.status_code).toBe(201)
    expect(test.body.status).toBe("created")
  });

  it('should call use_case with correct input', async () => {
    const { sut, create_loan_request } = makeSut()

    // input
    const data = {
      loan: 10000,
      user_id: "id"
    }

    const createLoanRequestSpy = jest.spyOn(create_loan_request, "execute")
    await sut.handle(data)

    expect(createLoanRequestSpy).toBeCalledWith(data)
  });

  it('should return error on exception', async () => {
    const { sut } = makeSut()

    // input
    const data = {
      loan: 10000000,
      user_id: "id"
    }

    const test = await sut.handle(data)

    expect(test.body?.status).toBe("error")
  });
});
