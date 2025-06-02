import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import type { LoginType } from '../types/user'
import { login } from '../services/auth.services'
import { toast } from 'react-toastify'
import { useAuthStore } from '../stores/authStore'

function LoginPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const setToken = useAuthStore((state) => state.setToken)

  const handleLogin = (formData: LoginType) => {
    login(formData)
      .then((data) => {
        setToken(data?.token)

        reset()

        navigate('/admin')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <div className="flex flex-col gap-4 m-6">
      <h2 className="text-2xl font-medium">Login to your account</h2>

      <form
        className="flex flex-col gap-2 bg-white p-4 rounded-md border"
        onSubmit={handleSubmit(handleLogin)}
        noValidate
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            className="p-2 border border-[#8BC3D6] rounded bg-white"
            type="email"
            id="email"
            placeholder="testino@example.com"
            {...register('email', {
              required: 'Provide an email',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Provide a valid email address',
              },
            })}
          />
          {errors.email ? (
            <p className="text-red-400">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <input
            className="p-2 border border-[#8BC3D6] rounded bg-white"
            type="password"
            id="password"
            placeholder="supersecret123"
            {...register('password', {
              required: 'Provide a password',
            })}
          />
          {errors.password ? (
            <p className="text-red-400">{errors.password.message}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <button
            className="p-2 bg-[#8BC3D6] text-white hover:bg-[#79b3c6] font-semibold rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>

          <span className="self-center">
            Dont&apos;t have an account?{' '}
            <Link className="text-[#8BC3D6] underline" to={'/auth/register'}>
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
