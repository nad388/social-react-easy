import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import RoutesPage from './components/routes/Routes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<RoutesPage />
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
)
