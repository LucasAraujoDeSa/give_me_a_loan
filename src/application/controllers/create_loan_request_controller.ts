import { UseCase, Controller } from "@/core/protocols"
import { CreateLoanRequest } from "../use_cases/create_loan_request"

export class CreateLoanRequestController implements Controller {
  constructor(
    private _createLoanRequest: UseCase<CreateLoanRequest.Input, void>
  ){}

  public async handle(
    req: CreateLoanRequestController.Request
  ) {
    try{
      await this._createLoanRequest.execute(req)

      return {
        body: {
          status: "created",
          data: null
        },
        status_code: 201
      }
    }catch(error: any){
      return {
        body: {
          status: "error",
          name: error.name,
          message: error.message,
        },
        status_code: error.status_code ? error.status_code : 500
      }
    }
  }
}

export namespace CreateLoanRequestController {
  export type Request = {
    loan: number,
    user_id: string
  }
}
