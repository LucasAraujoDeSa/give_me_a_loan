import { GetUserByIdRepository } from "@/modules/loan/application/contracts"
import { User } from "@/modules/loan/domain/models"
import prisma from "../../client"
export class GetUserByIdRepositoryImpl implements GetUserByIdRepository {
  private _client = prisma

  public async get(user_id: string): Promise<User | null> {
    const user = this._client.users.findUnique({
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
