import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginApi } from 'src/apis/auth.api'
import Input from 'src/components/Form'
import { ResponseAPI } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/roules'
import { isAxiosUnprocessableEntity } from 'src/utils/utils'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginApi(body),
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      if (isAxiosUnprocessableEntity<ResponseAPI<FormData>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.entries(formError).forEach(([key, value]) => {
            setError(key as keyof FormData, {
              type: 'manual',
              message: value
            })
          })
        }
      }
    }
  })

  const onSubmit = handleSubmit((data: FormData) => {
    loginAccountMutation.mutate(data)
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <button className='w-full bg-red-500 text-white rounded p-3 mt-3'>Đăng nhập</button>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
