import { Dispatch, SetStateAction } from 'react'

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
	_id: string
	avatar: string
	name: string
	isInNetwork?: boolean
}

export interface IMenuItem {
	title: string
	link: string
	icon: any
}

export interface IPost {
	author: IUser
	createdAt: string
	content: string
	images?: string[]
}
