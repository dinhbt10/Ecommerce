import { AuthResponse } from 'src/types/auth.type'
import instance from 'src/utils/http'

export const registerApi = async (data: { email: string; password: string }) =>
  instance.post<AuthResponse>('/register', data)

export const loginApi = async (data: { email: string; password: string }) => instance.post<AuthResponse>('/login', data)

export const logout = async () => instance.post('/logout')
