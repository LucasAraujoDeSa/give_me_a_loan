import {
  SaveLoanRequestRepository,
  SaveLoanRequestRepositoryInput
} from "@/modules/loan/application/contracts"

export class SaveLoanRequestDatabaseInMemory implements SaveLoanRequestRepository{
  public date: Date | null
  private _loan_memory: Array<SaveLoanRequestRepositoryInput> = []

  public async save(input: SaveLoanRequestRepositoryInput): Promise<void> {

    this._loan_memory.push(input)
    this.date = input.date
  }

}
