export interface SuccessResponseAPI<T> {
  message: string
  data: T
}
export interface ErrorsResponseAPI<T> {
  message: string
  data?: T
}
