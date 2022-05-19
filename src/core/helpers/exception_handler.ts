export const exceptionHandler = (error: any) => {
  return {
    body: {
      status: "error",
      name: error.name,
      message: error.message,
    },
    status_code: error.status_code ? error.status_code : 500
  }
}
