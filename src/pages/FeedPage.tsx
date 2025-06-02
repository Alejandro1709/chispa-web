import { useEffect, useState } from 'react'
import AddPostForm from '../components/AddPostForm'
import PostsList from '../components/PostsList'
import { getPosts } from '../services/post.services'

function FeedPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then((data) => {
        console.log(data)
        setPosts(data)
      })
      .catch((err) => {
        console.log(err)
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
