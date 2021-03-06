export class ErrorHandler extends Error {
  constructor(public status_code: number | null, message: string, name: string){
    super()
    this.status_code = status_code,
    this.message = message,
    this.name = name
  }
}
