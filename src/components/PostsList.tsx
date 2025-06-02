import type { IPost } from '../types/post'
import PostCard from './PostCard'

type PostsListProps = {
  posts: IPost[]
}

function PostsList({ posts }: PostsListProps) {
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
