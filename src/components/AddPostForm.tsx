import { useForm } from 'react-hook-form'
import type { CreatePostType } from '../types/post'
import { createPost } from '../services/post.services'
import { toast } from 'react-toastify'
import { usePostStore } from '../stores/postStore'
import { useState } from 'react'
import Loader from './Loader'
import { useAuthStore } from '../stores/authStore'

function AddPostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostType>({
    defaultValues: {
      content: '',
    },
  })

  const posts = usePostStore((state) => state.posts)
  const setPosts = usePostStore((state) => state.setPosts)

  const user = useAuthStore((state) => state.user)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmitPost = (formData: CreatePostType) => {
    setIsLoading(true)

    createPost(formData)
      .then((data) => {
        toast.success('Post Submitted')

        reset()

        setPosts([...posts, { ...data, user }])

        setIsLoading(false)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleSubmitPost)}
        noValidate
      >
        <textarea
          className="rounded resize-none bg-[#F6F6F6]"
          rows={4}
          placeholder="Enter some text here..."
          {...register('content', {
            required: 'Content is required',
            minLength: {
              value: 1,
              message: 'Content needs at least 1 character',
            },
          })}
        ></textarea>
        {errors.content ? (
          <p className="text-red-400">{errors.content.message}</p>
        ) : null}

        <button
          className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : 'Publish'}
        </button>
      </form>
    </div>
  )
}

export default AddPostForm
