import { CreateLoanRequestEntity } from "@/modules/loan/domain/entities/create_loan_request_entity"
import { UserMock, LoanRequestMock } from "./mocks"

const makeSut = () => {
  const sut = new CreateLoanRequestEntity()

  return {
    sut
  }
}


describe("==> create loan request entity", () => {
  it("should create loan request", async () => {
    const { sut } = makeSut()

    // inputs
    const user = UserMock()
    const input = LoanRequestMock(user)

    const test = await sut.request(input);

    expect(test.user_id).toBe(user.id);
    expect(test.loan).toBe(input.loan);
  });

  it("should throw a erro if loan is high than 1000000", async () => {
    const { sut } = makeSut()

    // inputs
    const user = UserMock()
    const input = LoanRequestMock(user)

    expect(
      sut.request({
        ...input,
        loan: 10000000
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it("should throw a erro if user has a loan with status unpaid", async () => {
    const { sut } = makeSut()

    // inputs
    const user = UserMock()
    const input = LoanRequestMock(user)

    expect(
      sut.request({
        ...input,
        user: {
          ...user,
          loans:
          [
            {
              date: new Date(Date.now()),
              status: "unpaid"
            }
          ]
        },
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
