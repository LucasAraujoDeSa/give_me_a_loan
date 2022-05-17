import { exceptionHandler, created } from "@/core/helpers"
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

      return created()
    }catch(error){
      return exceptionHandler(error)
    }
  }
}

export namespace CreateLoanRequestController {
  export type Request = {
    loan: number,
    user_id: string
  }
}
