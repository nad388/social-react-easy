import { Alert, Button, ButtonGroup } from '@mui/material'
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { FC, SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import { useAuth } from '../../providers/useAuth'
import { IUserData } from './types'

const Auth: FC = () => {
	const { ga, user } = useAuth()
	const [userData, setUserData] = useState<IUserData>({
		email: '',
		password: '',
		name: '',
	} as IUserData)
	const [isRegForm, setIsRegForm] = useState(false)
	const [error, setError] = useState('')

	const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()
		const auth = getAuth()

		if (isRegForm) {
			try {
				const res = await createUserWithEmailAndPassword(
					ga,
					userData.email,
					userData.password
				)
				await updateProfile(res.user, {
					displayName: userData.name,
				})
			} catch (error: any) {
				error.message && setError(error.message)
			}
		} else {
			try {
				await signInWithEmailAndPassword(ga, userData.email, userData.password)
			} catch (error: any) {
				error.message && setError(error.message)
			}
		}

		console.log(userData.email, userData.password)

		setUserData({ email: '', password: '', name: '' })
	}

	const navigate = useNavigate()

	useEffect(() => {
		if (user) navigate('/')
	}, [user])

	return (
		<>
			{error && (
				<Alert severity='error' style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}
			<Layout>
				<form
					onSubmit={handleLogin}
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 16,
						alignItems: 'center',
					}}
				>
					<input
						type='text'
						value={userData.name}
						onChange={e => setUserData({ ...userData, name: e.target.value })}
						style={{
							padding: 10,
							backgroundColor: 'transparent',
							border: '1px solid #ccc',
							color: 'white',
							outline: 'none',
							fontSize: '16px',
							width: '25ch',
							borderRadius: '5px',
						}}
					/>
					<input
						type='email'
						value={userData.email}
						onChange={e => setUserData({ ...userData, email: e.target.value })}
						style={{
							padding: 10,
							backgroundColor: 'transparent',
							border: '1px solid #ccc',
							color: 'white',
							outline: 'none',
							fontSize: '16px',
							width: '25ch',
							borderRadius: '5px',
						}}
						required
					/>
					<input
						type='password'
						value={userData.password}
						onChange={e =>
							setUserData({ ...userData, password: e.target.value })
						}
						style={{
							padding: 10,
							backgroundColor: 'transparent',
							border: '1px solid #ccc',
							color: 'white',
							outline: 'none',
							fontSize: '16px',
							width: '25ch',
							borderRadius: '5px',
						}}
						required
					/>
					<ButtonGroup variant='outlined'>
						<Button
							type='submit'
							sx={{ color: 'white', borderColor: 'gray' }}
							onClick={() => setIsRegForm(false)}
						>
							Log in
						</Button>
						<Button
							type='submit'
							sx={{ color: 'white', borderColor: 'gray' }}
							onClick={() => setIsRegForm(true)}
						>
							Register
						</Button>
					</ButtonGroup>
				</form>
			</Layout>
		</>
	)
}

export default Auth
