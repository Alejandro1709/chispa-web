export interface IUser {
  _id: string
  name: string
  username: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export type LoginType = Pick<IUser, 'email' | 'password'>

export type RegisterType = Pick<
  IUser,
  'name' | 'username' | 'email' | 'password'
>
