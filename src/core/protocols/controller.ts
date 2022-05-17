export interface Response {
  body: any,
  status_code: number
}

export interface Controller<T = any>{
  handle(req: T): Promise<Response>
}
