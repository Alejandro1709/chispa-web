import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token') || '{}')

  if (token) {
    config.headers.Authorization = `Bearer ${token.state.token}`
  }

  return config
})

export default api
