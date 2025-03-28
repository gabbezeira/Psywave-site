import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CategoryAccountsPage } from '@pages/CategoryAccountsPage.jsx'
import { Error } from '@pages/Error.jsx'
import { Home } from '@pages/Home.jsx'
import { LoginPage } from '@pages/LoginPage.jsx'
import { App } from './App'

import { AuthProvider } from '@context/AuthContext.jsx'
import { NotificationProvider } from '@context/NotificationContext.jsx'
import { DetailsPage } from './pages/DetailsPage'
import { PainelPage } from './pages/Painel'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'accounts/:categorySlug',
				element: <CategoryAccountsPage />,
			},
			{
				path: 'accounts/:categorySlug/:numericId',
				element: <DetailsPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'painel',
				element: <PainelPage />,
			},
		],
	},
	{
		path: 'error',
		element: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NotificationProvider>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</NotificationProvider>
	</React.StrictMode>,
)
