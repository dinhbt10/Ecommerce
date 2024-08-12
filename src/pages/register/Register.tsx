import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Input from 'src/components/Form'
import { schema, Schema } from 'src/utils/roules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { registerApi } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntity } from 'src/utils/utils'
import { ResponseAPI } from 'src/types/utils.type'

type FormData = Schema
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerApi(body),
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      if (isAxiosUnprocessableEntity<ResponseAPI<Omit<FormData, 'confirm_password'>>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.entries(formError).forEach(([key, value]) => {
            setError(key as keyof Omit<FormData, 'confirm_password'>, {
              type: 'manual',
              message: value
            })
          })
        }
      }
    }
  })

  const onSubmit = handleSubmit((data: FormData) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body)
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
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

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
                autoComplete='on'
              />
              <button className='w-full bg-red-500 text-white rounded p-3 mt-3'>Đăng ký</button>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
