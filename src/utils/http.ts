import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearLocalStorage, getAccessToken, setAccessToken, setProfile } from './auth'
import path from 'src/constants/path'

let accessToken = getAccessToken()

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api-ecom.duthanhduoc.com/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance

instance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`
      return config
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    const { url } = response.config
    if (url === path.login || url === path.register) {
      const data = response.data as AuthResponse
      accessToken = data.data.access_token
      setAccessToken(accessToken)
      setProfile(data.data.user)
    } else if (url === path.logout) {
      accessToken = ''
      clearLocalStorage()
    }
    return response
  },
  function (error: AxiosError) {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      const data: any | undefined = error.response?.data
      const message = data?.message || error.message
      toast.error(message)
    }
    return Promise.reject(error)
  }
)
