import { FC } from 'react'
import Menu from './Menu'
import UserItems from './UserItems'

const Sidebar: FC = () => {
	return (
		<div>
			<UserItems />
			<Menu />
		</div>
	)
}

export default Sidebar
