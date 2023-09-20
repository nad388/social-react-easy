import Home from '../home/Home'

export const routes = [
	{
		path: '/',
		// exact: true,
		component: Home,
		auth: true,
	},
	{
		path: '/profile',
		// exact: false,
		component: Home,
		auth: true,
	},
	{
		path: '/messages',
		// exact: true,
		component: Home,
		auth: true,
	},
	{
		path: '/message/:id',
		// exact: false,
		component: Home,
		auth: true,
	},
	{
		path: '/fiends/:id',
		// exact: false,
		component: Home,
		auth: true,
	},
	{
		path: '/auth',
		// exact: true,
		component: Home,
		auth: false,
	},
]
