export enum Status {
  "on_going"= "ONGOING",
  "active" = "ACTIVE",
  "unpaid" = "UNPAID",
  "paid" = "PAID"
}

export interface SaveLoanRequestRepositoryInput{
  status: Status
  loan: number
  user_id: string
  date: Date
}

export interface SaveLoanRequestRepository {
  save(Input: SaveLoanRequestRepositoryInput): Promise<void>
}
