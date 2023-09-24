import { Avatar, Button, Card, Chip } from '@mui/material'
import { signOut } from 'firebase/auth'
import { useAuth } from '../../providers/useAuth'

const User = () => {
	const { user, ga } = useAuth()
	return (
		<Card
			variant='outlined'
			sx={{
				padding: 2,
				backgroundColor: 'transparent',
				border: 'none',
				borderRadius: 3,
				marginBottom: 5,
			}}
		>
			<Chip
				avatar={<Avatar alt='' src={user?.avatar} />}
				label={user?.name || 'No name'}
				variant='outlined'
				sx={{ display: 'flex', marginBottom: 2, color: 'white' }}
			/>
			<Button
				variant='outlined'
				onClick={() => signOut(ga)}
				sx={{ color: 'white', border: '1px solid gray' }}
			>
				Logout
			</Button>
		</Card>
	)
}

export default User
