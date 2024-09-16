import { User } from 'src/types/user.type'

export const setAccessToken = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}

export const getAccessToken = () => {
  return localStorage.getItem('access_token') || ''
}

export const getProfile = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const setProfile = (profile: User) => {
  return localStorage.setItem('profile', JSON.stringify(profile))
}
