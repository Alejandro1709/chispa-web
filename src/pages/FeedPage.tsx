import { useEffect } from 'react'
import AddPostForm from '../components/AddPostForm'
import PostsList from '../components/PostsList'
import { getPosts } from '../services/post.services'
import { toast } from 'react-toastify'
import { usePostStore } from '../stores/postStore'

function FeedPage() {
  const setPosts = usePostStore((state) => state.setPosts)

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

      <PostsList />
    </>
  )
}

export default FeedPage
