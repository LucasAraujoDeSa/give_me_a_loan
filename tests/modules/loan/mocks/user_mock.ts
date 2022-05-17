import { User } from "@/modules/loan/domain/models"

export const UserMock = (): User => {
  return {
    id: "id",
    user_name: "Jhon Doe",
    loans: [
      {
        date: new Date(2017,2,10),
        status: "paid"
      }
    ]
  }
}
