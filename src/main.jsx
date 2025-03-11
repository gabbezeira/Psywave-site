import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { CategoryAccountsPage } from '@pages/CategoryAccountsPage.jsx'
import { Error } from '@pages/Error.jsx'
import { Home } from '@pages/Home.jsx'
import { App } from './App'

import { AuthProvider } from '@context/AuthContext.jsx'
import { DetailsPage } from './pages/DetailsPage'

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
		],
	},
	{
		path: 'error',
		element: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
