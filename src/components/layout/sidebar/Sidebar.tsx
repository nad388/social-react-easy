import { FC } from 'react'
import UserItems from './UserItems'

const Sidebar: FC = () => {
	return (
		<div style={{ borderRight: '2px solid white' }}>
			<UserItems />
		</div>
	)
}

export default Sidebar
