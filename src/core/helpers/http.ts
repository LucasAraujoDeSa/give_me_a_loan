export const created = (data?: any) => {
  return {
    body: {
      status: "created",
      data: data
    },
    status_code: 201
  }
}
