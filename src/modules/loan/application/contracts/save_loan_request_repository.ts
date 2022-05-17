export interface SaveLoanRequestRepositoryInput{
  status: string
  loan: number
  user_id: string
  date: Date
}

export interface SaveLoanRequestRepository {
  save(Input: SaveLoanRequestRepositoryInput): Promise<void>
}
