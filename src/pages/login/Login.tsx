import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from 'src/apis/auth.api'
import { Button } from 'src/components'
import Input from 'src/components/Form'
import { AppContext } from 'src/context/app.context'
import { ErrorsResponseAPI } from 'src/types/utils.type'
import { Schema, schema } from 'src/utils/roules'
import { isAxiosUnprocessableEntity } from 'src/utils/utils'

type FormData = Omit<Schema, 'confirm_password'>
const loginSchema = schema.omit(['confirm_password'])

const Login = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
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
      setProfile(data.data.data.user)
      setIsAuthenticated(true)
      navigate('/')
    },
    onError: (error) => {
      if (isAxiosUnprocessableEntity<ErrorsResponseAPI<FormData>>(error)) {
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
              <Button
                className='w-full flex justify-center uppercase items-center bg-red-500 hover:bg-red-500 text-white rounded p-3 gap-2'
                isLoading={loginAccountMutation.isLoading}
                disabled={loginAccountMutation.isLoading}
              >
                Đăng nhập
              </Button>
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
