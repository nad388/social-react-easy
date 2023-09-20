import {
	Avatar,
	Box,
	Card,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { FC } from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const UserItems: FC = () => {
	const navigate = useNavigate()
	return (
		<Card
			variant='outlined'
			sx={{
				backgroundColor: 'inherit',
				border: 'none',
				marginRight: 6,
			}}
		>
			<Link
				to='/profile'
				style={{
					display: 'flex',
					alignItems: 'center',
					textDecoration: 'none',
					color: 'white',
					padding: 4,
					borderRadius: 3,
					marginBottom: 16,
					backgroundColor: '#1d2022',
				}}
			>
				<Box
					sx={{
						position: 'relative',
						marginRight: 2,
						width: 50,
						height: 50,
					}}
				>
					<Avatar
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZaEWMsFkDtknXOjvpXfNOK4X7Dg1oPoLVA&usqp=CAU'
						alt='user avatar'
						sx={{ width: 46, height: 46, borderRadius: '50%' }}
					/>

					<Box
						sx={{
							backgroundColor: '#6ad0ed',
							border: '2px solid #F1F7FA',
							width: 12,
							height: 12,
							position: 'absolute',
							bottom: 0,
							right: 0,
							borderRadius: '50%',
						}}
					/>
				</Box>
				<span style={{ fontSize: 14 }}>Doppelganger</span>
			</Link>
			<Link
				to='/profile'
				style={{
					display: 'flex',
					alignItems: 'center',
					textDecoration: 'none',
					color: 'white',
					padding: 4,
					borderRadius: 3,
					backgroundColor: '#1d2022',
					marginBottom: 16,
				}}
			>
				<Box
					sx={{
						position: 'relative',
						marginRight: 2,
						width: 50,
						height: 50,
					}}
				>
					<Avatar
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZaEWMsFkDtknXOjvpXfNOK4X7Dg1oPoLVA&usqp=CAU'
						alt='user avatar'
						sx={{ width: 46, height: 46, borderRadius: '50%' }}
					/>

					<Box
						sx={{
							backgroundColor: '#6ad0ed',
							border: '2px solid #F1F7FA',
							width: 12,
							height: 12,
							position: 'absolute',
							bottom: 0,
							right: 0,
							borderRadius: '50%',
						}}
					/>
				</Box>
				<span style={{ fontSize: 14 }}>Doppelganger</span>
			</Link>
			<List style={{ backgroundColor: '#1d2022', borderRadius: 3 }}>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/messages')}>
						<ListItemIcon>
							<IoChatboxEllipsesOutline size={24} style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary='Messages' style={{ color: 'white' }} />
					</ListItemButton>
				</ListItem>
			</List>
		</Card>
	)
}

export default UserItems
