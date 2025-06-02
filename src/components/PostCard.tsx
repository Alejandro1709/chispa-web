function PostCard() {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-4">
      <h2 className="text-xl font-medium">@alejandro</h2>
      <p>The contract will be here June 12!!!!</p>
      <button className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer">
        Like Post
      </button>
    </div>
  )
}

export default PostCard
