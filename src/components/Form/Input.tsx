import { InputHTMLAttributes } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

const Input = ({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  autoComplete,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm'
}: Props) => {
  const registerResult = register && name ? register(name) : {}
  return (
    <div className={className}>
      <input
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={classNameInput}
        type={type}
        {...registerResult}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}

export default Input
