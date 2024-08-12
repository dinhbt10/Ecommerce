import { AuthResponse } from 'src/types/Auth.type'
import instance from 'src/utils/http'

export const registerApi = async (data: { email: string; password: string }) =>
  instance.post<AuthResponse>('/register', data)

export const loginApi = async (data: { email: string; password: string }) => instance.post<AuthResponse>('/login', data)
