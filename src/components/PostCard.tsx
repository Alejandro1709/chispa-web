import { useAuthStore } from '../stores/authStore'
import type { IPost } from '../types/post'

type PostCardProps = {
  post: IPost
}

function PostCard({ post }: PostCardProps) {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-4">
      <h2 className="text-xl font-semibold">@{post.user.username}</h2>
      <p>{post.content}</p>

      {post.user._id === user?._id ? (
        <div className="flex flex-row justify-end gap-2">
          <button className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer">
            Edit Post
          </button>
          <button className="bg-[#C65757] hover:bg-[#bf6c6c] p-2 rounded font-semibold text-white cursor-pointer">
            Delete Post
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default PostCard
