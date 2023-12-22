import DoctorPage from '@pages/Doctors-page/doctor-page.jsx'
import ArticlePage from '@pages/article-page'
import ContactsPage from '@pages/contacts-page'
import StockPage from '@pages/stock-page'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainPage from './pages/main-page'

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />
		},
		// {
		// 	path: `/doctors`,
		// 	element: <DoctorPage />
		// },
		{
			path: `/article`,
			element: <ArticlePage />
		},
		{
			path: `/stock`,
			element: <StockPage />
		},
		{
			path: `/contacts`,
			element: <ContactsPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
