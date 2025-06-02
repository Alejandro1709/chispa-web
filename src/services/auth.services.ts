import { isAxiosError } from 'axios'
import type { LoginType, RegisterType } from '../types/user'
import api from '../config/axios'

export const login = async (formData: LoginType) => {
  try {
    const { data } = await api.post('/api/v1/auth/login', formData)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}

export const signup = async (formData: RegisterType) => {
  try {
    const { data } = await api.post('/api/v1/auth/register', formData)

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}
