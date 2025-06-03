import { toast } from 'react-toastify'
import { deletePost } from '../services/post.services'
import { useAuthStore } from '../stores/authStore'
import type { IPost } from '../types/post'
import { usePostStore } from '../stores/postStore'
import { Link } from 'react-router-dom'

type PostCardProps = {
  post: IPost
}

function PostCard({ post }: PostCardProps) {
  const user = useAuthStore((state) => state.user)

  const posts = usePostStore((state) => state.posts)
  const setPosts = usePostStore((state) => state.setPosts)

  const handleDeletePost = (postId: string) => {
    const answer = confirm('Are you sure?')

    if (answer) {
      deletePost(postId)
        .then(() => {
          toast.success('Post removed!')

          const updatedPosts = posts.filter((p) => p._id !== postId)

          setPosts(updatedPosts)
        })
        .catch((err) => {
          toast.error(err.message)
        })
    }
  }

  return (
    <div className="flex flex-col gap-2 bg-white shadow-lg rounded-md p-4">
      <h2 className="text-xl font-semibold">@{post.user.username}</h2>
      <p>{post.content}</p>

      {post.user._id === user?._id ? (
        <div className="flex flex-row justify-end gap-2">
          <Link
            to={`/admin/posts/${post._id}/edit`}
            className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer"
          >
            Edit Post
          </Link>
          <button
            className="bg-[#C65757] hover:bg-[#bf6c6c] p-2 rounded font-semibold text-white cursor-pointer"
            onClick={() => handleDeletePost(post._id)}
          >
            Delete Post
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default PostCard
