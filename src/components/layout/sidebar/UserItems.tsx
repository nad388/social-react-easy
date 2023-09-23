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
import { users } from './dataUsers'

const UserItems: FC = () => {
	const navigate = useNavigate()
	return (
		<Card
			variant='outlined'
			sx={{
				backgroundColor: 'inherit',
				border: 'none',
				marginRight: 2,
			}}
		>
			{users.map(user => (
				<Link
					key={user._id}
					to={`/profile/${user._id}`}
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
							src={user.avatar}
							alt='user avatar'
							sx={{ width: 46, height: 46, borderRadius: '50%' }}
						/>
						{user.isInNetwork && (
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
						)}
					</Box>
					<span style={{ fontSize: 14 }}>{user.name}</span>
				</Link>
			))}

			<List style={{ backgroundColor: '#1d2022', borderRadius: 3 }}>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate('/profile')}>
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
