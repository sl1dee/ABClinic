import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Footer from '@components/footer/footer.jsx'

function Routes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Footer />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
