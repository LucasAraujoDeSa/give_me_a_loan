import { CreateLoanRequest } from "@/domain/entities/create_loan_request"
import { UserMock } from "./mocks/user_mock"

const makeSut = () => {
  const sut = new CreateLoanRequest()

  return {
    sut
  }
}


describe("==> create loan request", () => {
  it("should create loan request", async () => {
    const { sut } = makeSut()

    // inputs
    const user = UserMock()
    const loan = 1000.0;
    const date = new Date(Date.now());

    const test = await sut.request({
      user,
      loan,
      date,
    });

    expect(test.user_id).toBe(user.id);
    expect(test.loan).toBe(loan);
  });

  it("should throw a erro if loan is high than 1000000", async () => {
    const { sut } = makeSut()

    // inputs
    const user = UserMock()
    const loan = 10000000;
    const date = new Date(Date.now());

    expect(
      sut.request({
        user,
        loan,
        date,
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it("should throw a erro if user has a loan with status unpaid", async () => {
    const { sut } = makeSut()

    // inputs
    const user = UserMock()
    const loan = 10000000;
    const date = new Date(Date.now());

    expect(
      sut.request({
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
        loan,
        date,
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
