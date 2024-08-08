import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api-ecom.duthanhduoc.com/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance
