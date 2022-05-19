import { GetUserByIdRepository } from "@/modules/loan/application/contracts"
import { User } from "@/modules/loan/domain/models"
import { BaseRepository } from "../base_repository"

export class GetUserByIdRepositoryImpl extends BaseRepository implements GetUserByIdRepository {

  public async get(user_id: string): Promise<User | null> {
    const user = this._client_context.users.findUnique({
      where: {
        id: user_id
      },
      select: {
        id: true,
        user_name: true,
        loans: {
          select: {
            status: true,
            date: true
          }
        }
      },
    })

    return user
  }
}
