import { isAxiosError } from 'axios'
import api from '../config/axios'

export const getAuthUser = async () => {
  try {
    const { data } = await api.get('/api/v1/users/me')

    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message)
    }
  }
}
