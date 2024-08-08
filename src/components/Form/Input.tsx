import { RegisterOptions, UseFormRegister } from 'react-hook-form'

type Props = {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: 'on' | 'off'
}

const Input = ({ type, errorMessage, placeholder, className, name, register, autoComplete }: Props) => {
  return (
    <div className={className}>
      <input
        autoComplete={autoComplete}
        placeholder={placeholder}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        type={type}
        {...register(name)}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
