import { Loan } from "./loan_model";

export interface User {
  id: string,
  user_name: string,
  loans: Array<Loan>
}
