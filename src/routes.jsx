import Header from '@components/header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function Routes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Header/>,
		},
	])

	return <RouterProvider router={ router }/>
}

export default Routes
