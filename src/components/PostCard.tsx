import type { IPost } from '../types/post'

type PostCardProps = {
  post: IPost
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-4">
      <h2 className="text-xl font-semibold">@{post.user.username}</h2>
      <p>{post.content}</p>
      <button className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer">
        Like Post
      </button>
    </div>
  )
}

export default PostCard
