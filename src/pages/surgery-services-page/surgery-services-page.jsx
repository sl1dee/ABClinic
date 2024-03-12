import { useEffect } from 'react'

import SurgeryServicesContainer from '@components/surgery-services-container'

import MainLayout from '../../layout/main/main-layout.jsx'

const SurgeryServicesPage = () => {
	useEffect(() => {
		document.title = 'Хирургия | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Хирургия | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', 'Челюстно-лицевая хирургия и гнатология решат ваши проблемы в ротовой полости')
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute('content', 'Челюстно-лицевая хирургия и гнатология решат ваши проблемы в ротовой полости')
	}, [])

	return (
		<MainLayout>
			<SurgeryServicesContainer />
		</MainLayout>
	)
}

export default SurgeryServicesPage
