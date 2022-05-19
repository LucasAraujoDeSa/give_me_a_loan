import Client from "../client"
import { PrismaClient } from "@prisma/client"

export class BaseRepository {
  protected _client_context = Client

  public setClientContext(context: PrismaClient){
    this._client_context = context
  }
}
