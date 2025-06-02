import { usePostStore } from '../stores/postStore'
import PostCard from './PostCard'

function PostsList() {
  const posts = usePostStore((state) => state.posts)

  return (
    <div className="flex flex-col gap-4">
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No posts were found.</p>
      )}
    </div>
  )
}

export default PostsList
