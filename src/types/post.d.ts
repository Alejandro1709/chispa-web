import type { IUser } from './user'

export interface IPost {
  _id: string
  content: string
  user: IUser
  createdAt: Date
  updatedAt: Date
}
