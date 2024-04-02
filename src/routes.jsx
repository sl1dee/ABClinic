import AdultReferralPage from '@pages/adult-referral-page'
import ArticlePage from '@pages/article-page'
import BlogPage from '@pages/blog-page/index.js'
import ChildrenReferralPage from '@pages/children-referral-page'
import ContactsPage from '@pages/contacts-page'
import DoctorsDetailPage from '@pages/doctors-detail-page'
import DoctorsPage from '@pages/doctors-page'
import Error404Page from '@pages/error-404-page/error-404-page.jsx'
import OrthodonticsServicesPage from '@pages/orthodontics-services-page/index.js'
import OrthopedicsServicesPage from '@pages/orthopedics-services-page/index.js'
import PeriodonticsServicesPage from '@pages/periodontics-services-page/index.js'
import PrivacyPolicyPage from '@pages/privacy-policy-page/index.js'
import StockPage from '@pages/stock-page'
import SurgeryServicesPage from '@pages/surgery-services-page/index.js'
import TherapyServicesPage from '@pages/therapy-services-page/index.js'
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
			path: `/doctor/:id`,
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
		},
		{
			path: `/therapy-service`,
			element: <TherapyServicesPage />
		},
		{
			path: `/orthopedics-services`,
			element: <OrthopedicsServicesPage />
		},
		{
			path: `/surgery-services`,
			element: <SurgeryServicesPage />
		},
		{
			path: `/orthodontics-services`,
			element: <OrthodonticsServicesPage />
		},
		{
			path: `/periodontics-services`,
			element: <PeriodonticsServicesPage />
		},
		{
			path: `/privacy-policy`,
			element: <PrivacyPolicyPage />
		},
		{
			path: `*`,
			element: <Error404Page /> // страница 404
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
