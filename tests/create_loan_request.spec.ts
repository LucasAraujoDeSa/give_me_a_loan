import {CreateLoanRequest} from "@/create_loan_request"

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
    const user = {
      user_name: "Jhon Doe",
      loans: [
        {
          date: new Date(2019,1,1),
          status: "paid",
        },
        {
          date: new Date(2020,1,1),
          status: "paid",
        },
        {
          date: new Date(2021,1,1),
          status: "paid",
        }
      ]
    };
    const loan = 1000.0;
    const date = new Date(Date.now());

    const test = await sut.request({
      user,
      loan,
      date,
    });

    expect(test.user).toBe(user);
    expect(test.loan).toBe(loan);
  });

  it("should throw a erro if loan is high than 1000000", async () => {
    const { sut } = makeSut()

    // inputs
    const user = {
      user_name: "Jhon Doe",
      loans: [
        {
          date: new Date(2019,1,1),
          status: "paid",
        },
        {
          date: new Date(2020,1,1),
          status: "paid",
        },
        {
          date: new Date(2021,1,1),
          status: "paid",
        }
      ]
    };
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
    const user = {
      user_name: "Jhon Doe",
      loans: [
        {
          date: new Date(2019,1,1),
          status: "paid",
        },
        {
          date: new Date(2020,1,1),
          status: "paid",
        },
        {
          date: new Date(2021,1,1),
          status: "unpaid",
        }
      ]
    };
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
});
