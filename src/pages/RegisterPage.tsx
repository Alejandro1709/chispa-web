import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import type { RegisterType } from '../types/user'
import { signup } from '../services/auth.services'
import { toast } from 'react-toastify'

function RegisterPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  const handleRegister = (formData: RegisterType) => {
    signup(formData)
      .then(() => {
        toast.success('User created!')

        reset()

        navigate('/auth/login')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <div className="flex flex-col gap-4 m-6">
      <h2 className="text-2xl font-medium">Create an account</h2>

      <form
        className="flex flex-col gap-2 bg-white p-4 rounded-md border"
        onSubmit={handleSubmit(handleRegister)}
        noValidate
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name:</label>
          <input
            className="p-2 border border-[#8BC3D6] rounded bg-white"
            type="text"
            id="name"
            placeholder="Testino Diprueba"
            {...register('name', {
              required: 'Provide a name',
            })}
          />
          {errors.name ? (
            <p className="text-red-400">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input
            className="p-2 border border-[#8BC3D6] rounded bg-white"
            type="text"
            id="username"
            placeholder="testinodiprueba"
            {...register('username', {
              required: 'Provide a username',
            })}
          />
          {errors.username ? (
            <p className="text-red-400">{errors.username.message}</p>
          ) : null}
        </div>
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
              minLength: {
                value: 7,
                message: 'Provide a password greater or equal to 7 characters',
              },
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
            Register
          </button>

          <span className="self-center">
            Already have an account?{' '}
            <Link className="text-[#8BC3D6] underline" to={'/auth/login'}>
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
