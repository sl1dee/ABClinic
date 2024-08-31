import { useEffect } from 'react'

import PeriodonticsServicesContainer from '@components/periodontics-services-container'

import MainLayout from '../../layout/main/index.js'

const PeriodonticsServicesPage = () => {
	useEffect(() => {
		document.title = 'Лечение десен | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Лечение десен | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				'Пародонтит и гингивит серьезные заболевания, с которыми вам помогут специалисты AB Clinic'
			)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute(
				'content',
				'Пародонтит и гингивит серьезные заболевания, с которыми вам помогут специалисты AB Clinic'
			)
	}, [])

	return (
		<MainLayout>
			<PeriodonticsServicesContainer />
		</MainLayout>
	)
}

export default PeriodonticsServicesPage
