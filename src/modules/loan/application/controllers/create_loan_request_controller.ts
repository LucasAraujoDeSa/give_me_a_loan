import { exceptionHandler, created } from "@/core/helpers"
import { UseCase, Controller } from "@/core/protocols"
import { CreateLoanRequestDto } from "../dtos/create_loan_request_dto"

export class CreateLoanRequestController implements Controller {
  constructor(
    private _createLoanRequest: UseCase<CreateLoanRequestDto, void>
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
