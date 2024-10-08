import { AuthResponse } from 'src/types/auth.type'
import instance from 'src/utils/http'

const authApi = {
  registerApi: (data: { email: string; password: string }) => instance.post<AuthResponse>('/register', data),
  loginApi: (data: { email: string; password: string }) => instance.post<AuthResponse>('/login', data),
  logout: () => instance.post('/logout')
}

export default authApi
