interface User {
  id: number
  name: string
  job: string
  favoriteColor: string
}

interface UsersImplementations {
  delete(id: number): User[] | undefined
  create(user: User): void
  update(user: User): User[] | undefined
}

class Users implements UsersImplementations {
  constructor(private readonly users: User[]) {}

  delete(id: number): User[] | undefined {
    const deleteIndex = this.users.findIndex(user => user.id === id)

    if (!deleteIndex) return undefined

    return this.users.splice(deleteIndex, 1)
  }
  create(user: User) {
    return this.users.push(user)
  }
  update(user: User): User[] | undefined {
    const userIndex = this.users.findIndex(({ id }) => id === user.id)

    if (!userIndex) return undefined

    return this.users.splice(userIndex, 1, { ...user })
  }
}
