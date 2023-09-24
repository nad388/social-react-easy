import firebase from 'firebase/compat/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/providers/AuthProvider'
import RoutesPage from './components/routes/Routes'
import './index.css'

// Initialize Firebase
firebase.initializeApp({
	apiKey: 'AIzaSyBoeWvQggvYXlNXVnAnCao-52KhrNxsQB4',
	authDomain: 'social-easy-f7a37.firebaseapp.com',
	projectId: 'social-easy-f7a37',
	storageBucket: 'social-easy-f7a37.appspot.com',
	messagingSenderId: '731588394542',
	appId: '1:731588394542:web:b2d770afa2cf627cc629bf',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	// <Layout>
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<RoutesPage />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
	// </Layout>
)
