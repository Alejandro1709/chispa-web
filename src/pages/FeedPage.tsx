import { useEffect, useState } from 'react'
import AddPostForm from '../components/AddPostForm'
import PostsList from '../components/PostsList'
import { getPosts } from '../services/post.services'
import { toast } from 'react-toastify'

function FeedPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [])

  return (
    <>
      <AddPostForm />

      <PostsList posts={posts} />
    </>
  )
}

export default FeedPage
