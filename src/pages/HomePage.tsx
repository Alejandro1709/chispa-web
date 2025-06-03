import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="flex flex-col gap-2 items-center min-h-screen bg-[#F5F7FD] pt-40">
      <h1 className="text-4xl font-semibold">Hello! Do you got some Chispa?</h1>
      <p className="text-2xl">Let&apos;s find out!</p>
      <Link
        className="bg-[#8BC3D6] hover:bg-[#79b3c6] py-2 px-4 rounded font-semibold text-white"
        to={'/admin'}
      >
        See some chispas
      </Link>
    </div>
  )
}

export default HomePage
