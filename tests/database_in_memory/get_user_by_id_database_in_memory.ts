import {
  GetUserByIdRepository,
} from "@/application/contracts"
import { User } from "@/domain/models"

export class GetUserByIdDatabaseInMemory implements GetUserByIdRepository{
  protected _user_id = "id"
  private _user_memory: Array<User> = [{
    id:  this._user_id,
    user_name: "Mr Jhon Doe",
    loans: [
      {
        date: new Date(2022, 2-1, 13),
        status: "paid"
      }
    ]
  }]


  public async get(user_id: string): Promise<User> {

    this._user_id = user_id

    return this._user_memory[0]
  }

}
