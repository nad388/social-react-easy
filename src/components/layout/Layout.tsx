import { Grid } from '@mui/material'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

type child = {
	children: React.ReactNode
}

const Layout = ({ children }: child) => {
	return (
		<>
			<Header />
			<Grid
				container
				spacing={2}
				paddingX={5}
				marginTop={2}
				maxWidth={1400} //?
			>
				<Grid item md={3}>
					<Sidebar />
				</Grid>
				<Grid item md={9}>
					{children}
				</Grid>
			</Grid>
		</>
	)
}

export default Layout
