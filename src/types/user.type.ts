type Role = 'Admin' | 'User'

export interface User {
  _id: string
  roles: Role[]
  email: string
  name: string
  address: string
  phone: string
  data_of_birth: null
  createdAt: string
  updatedAt: string
}
