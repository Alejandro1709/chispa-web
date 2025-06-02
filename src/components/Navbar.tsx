import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

function Navbar() {
  const token = useAuthStore((state) => state.token)
  const clearToken = useAuthStore((state) => state.clearToken)

  return (
    <div className="flex items-center h-14 bg-white">
      <div className="flex flex-row justify-between items-center w-full mx-6">
        <Link to={'/admin'}>
          <h2 className="text-xl font-semibold">Chispa.dev</h2>
        </Link>

        <nav role="navigation">
          {token ? (
            <ul className="flex flex-row gap-4">
              <li className="py-1 px-2 bg-[#8BC3D6] text-white font-medium rounded">
                <button className="cursor-pointer" onClick={clearToken}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-row gap-4">
              <li className="py-1 px-2 bg-[#8BC3D6] text-white font-medium rounded">
                <Link to={'/auth/login'}>Login</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
