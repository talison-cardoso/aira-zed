// Example TypeScript demo code
// This code is not part of the Aira theme

type User = {
  id: number
  name: string
  email?: string
}

class UserService {
  private users: User[] = []

  addUser(user: User): void {
    this.users.push(user)
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id)
  }

  async fetchUsers(): Promise<User[]> {
    // Fake async call
    return new Promise(resolve => {
      setTimeout(() => resolve(this.users), 500)
    })
  }
}

const service = new UserService()
service.addUser({ id: 1, name: "John", email: "john@example.com" })
service.addUser({ id: 2, name: "Bob" })

service.fetchUsers().then(users => {
  for (const user of users) {
    console.log(`👤 ${user.name} (${user.email ?? "sem e-mail"})`)
  }
})
