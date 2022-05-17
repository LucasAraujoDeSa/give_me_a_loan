export const exceptionHandler = (error: any) => {
  return {
    body: {
      status: "error",
      name: error.name ? error.name : "ServerError",
      message: error.message ? error.message : "internal server error",
    },
    status_code: error.status_code ? error.status_code : 500
  }
}
