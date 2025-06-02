import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import { useAuthStore } from '../stores/authStore'

function AppLayout() {
  const token = useAuthStore((state) => state.token)

  return token ? (
    <div className="flex flex-col min-h-screen bg-[#F5F7FD]">
      <Navbar />

      <main className="flex flex-col gap-4 flex-1 m-6 md:container md:mx-auto">
        <Outlet />
      </main>

      <ToastContainer />
    </div>
  ) : (
    <Navigate to={'/auth/login'} />
  )
}

export default AppLayout
