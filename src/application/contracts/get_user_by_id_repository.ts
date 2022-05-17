import { User } from "../../domain/models"

export interface GetUserByIdRepository {
  get(user_id: string): Promise<User>
}
