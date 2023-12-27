import AdultReferralPage from '@pages/adult-referral-page'
import ArticlePage from '@pages/article-page'
import BlogPage from '@pages/blog-page'
import ChildrenReferralPage from '@pages/children-referral-page'
import ContactsPage from '@pages/contacts-page'
import DoctorsDetailPage from '@pages/doctors-detail-page'
import DoctorsPage from '@pages/doctors-page'
import StockPage from '@pages/stock-page'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainPage from './pages/main-page'

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />
		},
		{
			path: `/doctors`,
			element: <DoctorsPage />
		},
		{
			path: `/doctor/12`,
			element: <DoctorsDetailPage />
		},
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
		},
		{
			path: `/blog`,
			element: <BlogPage />
		},
		{
			path: `/adult-referral`,
			element: <AdultReferralPage />
		},
		{
			path: `/children-referral`,
			element: <ChildrenReferralPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
