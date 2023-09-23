import {
	Card,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { menu } from './dataMenu'

const Menu = () => {
	const navigate = useNavigate()
	return (
		<Card
			variant='outlined'
			sx={{
				backgroundColor: 'inherit',
				border: 'none',
				marginRight: 2,
				marginTop: 10,
				marginBottom: 10,
			}}
		>
			<List style={{ backgroundColor: '#1d2022', borderRadius: 3 }}>
				{menu.map(item => (
					<ListItem key={item.link} disablePadding>
						<ListItemButton onClick={() => navigate(item.link)}>
							<ListItemIcon
								sx={{
									minWidth: 36,
								}}
							>
								<item.icon size={24} style={{ color: 'white' }} />
							</ListItemIcon>
							<ListItemText primary={item.title} style={{ color: 'white' }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	)
}

export default Menu
