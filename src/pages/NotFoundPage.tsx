import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-[#F5F7FD]">
      <h1 className="text-5xl font-medium text-center">
        This Page does not exist... yet
      </h1>
      <p className="text-3xl text-center">Let me take you back to feed</p>
      <Link
        to={'/admin'}
        className="bg-[#8BC3D6] hover:bg-[#79b3c6] py-2 px-4 rounded font-semibold text-white cursor-pointer"
      >
        Click
      </Link>
    </div>
  )
}

export default NotFoundPage
