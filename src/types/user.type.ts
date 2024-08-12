type Role = 'Admin' | 'user'

export type User = {
  roles: Role[]
  _id: string
  email: string
  createdAt: string
  updatedAt: string
}
