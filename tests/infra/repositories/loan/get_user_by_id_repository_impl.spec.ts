import { GetUserByIdRepositoryImpl } from "@/infra/database/repositories/loan/get_user_by_id_repository_impl"
import prisma from "@/infra/database/client"
import { UserMock } from "./mocks/user_mock"

const makeSut = () => {
  const sut = new GetUserByIdRepositoryImpl()

  return {
    sut
  }
}

const data = UserMock()

describe('==> get user by id repository', () => {
  afterAll( async () => {
    const deleteUsers = prisma.users.deleteMany()

    await prisma.$transaction([
      deleteUsers
    ])

    await prisma.$disconnect()
  })

  it('should verify if user exist', async () => {
    const { sut } = makeSut()

    const user = await prisma.users.create({
      data:data
    })

    const test = await sut.get(user.id)

    expect(test?.user_name).toEqual(user.user_name)
  });
});
