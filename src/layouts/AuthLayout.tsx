import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FD]">
      <Outlet />
    </div>
  )
}

export default AuthLayout
