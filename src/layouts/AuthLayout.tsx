import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FD]">
      <Outlet />

      <ToastContainer />
    </div>
  )
}

export default AuthLayout
