import { useEffect } from 'react'
import AddPostForm from '../components/AddPostForm'
import PostsList from '../components/PostsList'
import { getPosts } from '../services/post.services'
import { toast } from 'react-toastify'
import { usePostStore } from '../stores/postStore'
import { useAuthStore } from '../stores/authStore'
import { getAuthUser } from '../services/user.services'

function FeedPage() {
  const setPosts = usePostStore((state) => state.setPosts)
  const setUser = useAuthStore((state) => state.setUser)

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [])

  useEffect(() => {
    getAuthUser()
      .then((data) => {
        setUser(data)
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
