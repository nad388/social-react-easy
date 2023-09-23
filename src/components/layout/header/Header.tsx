import { FC, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import styles from './Header.module.css'
import logo from './logo.png'

const Header: FC = () => {
	const [isSearchActive, setIsSearchActive] = useState(false)
	return (
		<header className={styles.header}>
			<div className={styles.imageWrapper}>
				<img src={logo} alt='logo' />
			</div>

			<div className={styles.wrapper}>
				{!isSearchActive && <IoSearchOutline />}

				<input type='text' placeholder='Search' onClick={() => setIsSearchActive(true)}/>
			</div>
		</header>
	)
}

export default Header
