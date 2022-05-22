import { SaveLoanRequestRepositoryImpl } from "@/infra/database/repositories/loan/save_loan_request_repository_impl"
import prisma from "@/infra/database/client"
import { UserMock } from "./mocks/user_mock"
import { LoanMock } from "./mocks/loan_mock"

const makeSut = () => {
  const sut = new SaveLoanRequestRepositoryImpl()

  return {
    sut
  }
}

const user_data = UserMock()
const loan_data = LoanMock

describe('==> get user by id repository', () => {
  afterAll( async () => {
    const deleteUsers = prisma.users.deleteMany()
    const deleteLoans = prisma.loan.deleteMany()

    await prisma.$transaction([
      deleteUsers,
      deleteLoans
    ])

    await prisma.$disconnect()
  })



  it('should save a loan request', async () => {
    const { sut } = makeSut()

    const user = await prisma.users.create({
      data:user_data
    })

    const saveLoanRequestSpy = jest.spyOn(sut, "save")

    await sut.save(loan_data(user.id))

    expect(saveLoanRequestSpy).toBeCalled()
  });
});
