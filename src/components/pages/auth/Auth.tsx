import { Alert, Button, ButtonGroup } from '@mui/material'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { FC, SyntheticEvent, useState } from 'react'
import { IUserData } from './types'

const Auth: FC = () => {
	const [userData, setUserData] = useState<IUserData>({
		email: '',
		password: '',
	} as IUserData)
	const [isRegForm, setIsRegForm] = useState(false)
	const [error, setError] = useState('')

	const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault()
		const auth = getAuth()

		if (isRegForm) {
			try {
				await createUserWithEmailAndPassword(
					auth,
					userData.email,
					userData.password
				)
			} catch (error: any) {
				error.message && setError(error.message)
			}
		} else {
			console.log('login')
		}

		console.log(userData.email, userData.password)

		setUserData({ email: '', password: '' })
	}
	return (
		<>
			{error && (
				<Alert severity='error' style={{ marginBottom: 20 }}>
					{error}
				</Alert>
			)}

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
					onChange={e => setUserData({ ...userData, password: e.target.value })}
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
		</>
	)
}

export default Auth
