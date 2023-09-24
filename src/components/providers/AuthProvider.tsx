import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'
import { createContext, useEffect, useMemo, useState } from 'react'
import { IUser, TypeSetState } from '../../types'
import { users } from '../layout/sidebar/dataUsers'

interface IContext {
	user: IUser | null
	setUser: TypeSetState<IUser | null>
	ga: Auth
	db: Firestore
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<IUser | null>(null)

	const ga = getAuth()
	const db = getFirestore()

	useEffect(() => {
		const unListen = onAuthStateChanged(ga, authUser => {
			if (authUser)
				setUser({
					_id: authUser.uid,
					avatar: users[1].avatar,
					name: authUser.displayName || '',
				})
			else setUser(null)
		})
		return () => {
			unListen()
		}
		// eslint-disable-next-line
	}, [])

	const values = useMemo(
		() => ({
			user,
			setUser,
			ga,
			db,
		}),
		[user, ga, db]
	)

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
