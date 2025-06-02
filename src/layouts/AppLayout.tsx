import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FD]">
      <Navbar />

      <main className="flex flex-col gap-4 flex-1 m-6 md:container md:mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
