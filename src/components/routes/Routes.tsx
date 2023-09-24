import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Auth from '../pages/auth/Auth'
import { useAuth } from '../providers/useAuth'
import { routes } from './list'

const RoutesPage = () => {
	const { user } = useAuth()
	return (
		<Routes>
			{routes.map(route => (
				<Route
					path={route.path}
					key={`route ${route.path}`}
					element={
						route.auth && !user ? (
							<Auth />
						) : (
							<Layout>
								<route.component />
							</Layout>
						)
					}
				/>
			))}
		</Routes>
	)
}

export default RoutesPage
