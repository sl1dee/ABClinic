import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainPage from './pages/main-page'

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />
		}
		// {
		// 	path: `/doctors`,
		// 	element: <DoctorPage />
		// },
		// {
		// 	path: `/article`,
		// 	element: <ArticlePage />
		// },
		// {
		// 	path: `/stock`,
		// 	element: <StockPage />
		// }
	])

	return <RouterProvider router={router} />
}

export default Routes
