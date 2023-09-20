import { Route, Routes } from 'react-router-dom'
import { routes } from './list'

const RoutesPage = () => {
	const isAuth = true
	return (
		<Routes>
			{routes.map(route => {
				if (route.auth && !isAuth) {
					return false
				}
				return (
					<Route
						path={route.path}
						// exact={route.exact}
						key={`route ${route.path}`}
						element={<route.component />}
					></Route>
				)
			})}
		</Routes>
	)
}

export default RoutesPage
