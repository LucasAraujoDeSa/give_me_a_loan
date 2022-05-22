import { Status } from "@/modules/loan/application/contracts"

export const LoanMock = (user_id: string) => ({
  date: new Date(),
  user_id: user_id,
  status: Status.on_going,
  loan: 1000
})
