import { create } from 'zustand'
import type { IPost } from '../types/post'

type PostState = {
  posts: IPost[]
  setPosts: (posts: IPost[]) => void
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts: IPost[]) => set(() => ({ posts })),
}))
