import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { AuthUserType } from '../types/user'

interface AuthState {
  user: AuthUserType | null
  token: string | null
  setToken: (token: string) => void
  setUser: (user: AuthUserType) => void
  clearToken: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setToken: (token: string) => set({ token }),
      setUser: (user: AuthUserType) => set({ user }),
      clearToken: () => set({ token: null, user: null }),
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
