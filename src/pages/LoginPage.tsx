import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="flex flex-col gap-4 m-6">
      <h2 className="text-2xl font-medium">Login to your account</h2>

      <form
        className="flex flex-col gap-2 bg-white p-4 rounded-md border"
        onSubmit={() => {}}
        noValidate
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            className="p-2 border border-[#8BC3D6] rounded bg-white"
            type="email"
            id="email"
            placeholder="testino@example.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password:</label>
          <input
            className="p-2 border border-[#8BC3D6] rounded bg-white"
            type="password"
            id="password"
            placeholder="supersecret123"
          />
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
