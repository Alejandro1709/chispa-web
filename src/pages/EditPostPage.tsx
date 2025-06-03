import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPost, updatePost } from '../services/post.services'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import type { CreatePostType } from '../types/post'

function EditPostPage() {
  const { id } = useParams()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CreatePostType>({
    defaultValues: {
      content: '',
    },
  })

  useEffect(() => {
    if (!id) return

    getPost(id)
      .then((data) => {
        setValue('content', data.content)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }, [id, setValue])

  const handleUpdatePost = (formData: CreatePostType) => {
    if (!id) return

    updatePost(id, formData)
      .then(() => {
        toast.success('Post updated!')

        reset()

        navigate('/admin')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <Link
          className="p-2 bg-[#8BC3D6] hover:bg-[#79b3c6] w-fit rounded font-semibold text-white"
          to={'/admin'}
        >
          Cancel
        </Link>
      </div>

      <div className="bg-white p-4 rounded-md shadow-lg">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleUpdatePost)}
          noValidate
        >
          <textarea
            className="rounded resize-none bg-[#F6F6F6]"
            rows={4}
            placeholder="Enter some text here..."
            {...register('content', {
              required: 'Provide a content',
            })}
          ></textarea>
          {errors.content ? (
            <p className="text-red-400">{errors.content.message}</p>
          ) : null}
          <button className="bg-[#8BC3D6] hover:bg-[#79b3c6] p-2 rounded font-semibold text-white cursor-pointer">
            Update Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditPostPage
