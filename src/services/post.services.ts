import { isAxiosError } from 'axios'
import api from '../config/axios'
import type { CreatePostType } from '../types/post'

export const getPosts = async () => {
  try {
    const { data } = await api.get('/api/v1/posts')

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}

export const getPost = async (id: string) => {
  try {
    const { data } = await api.get(`/api/v1/posts/${id}`)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}

export const createPost = async (formData: CreatePostType) => {
  try {
    const { data } = await api.post('/api/v1/posts', formData)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}

export const updatePost = async (id: string, formData: CreatePostType) => {
  try {
    const { data } = await api.put(`/api/v1/posts/${id}`, formData)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}

export const deletePost = async (id: string) => {
  try {
    const { data } = await api.delete(`/api/v1/posts/${id}`)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}
