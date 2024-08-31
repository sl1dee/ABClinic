import { useEffect } from 'react'

import TherapyServicesContainer from '@components/therapy-services-container'

import MainLayout from '../../layout/main/index.js'

const TherapyServicesPage = () => {
	useEffect(() => {
		document.title = 'Лечение зубов | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Лечение зубов | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				'Улыбка клиента - наша забота, профессиональное и комфортное лечение зубов. Избавим вас от кариеса, пульпита, парадонтита и всех остальных неприятностей'
			)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute(
				'content',
				'Улыбка клиента - наша забота, профессиональное и комфортное лечение зубов. Избавим вас от кариеса, пульпита, парадонтита и всех остальных неприятностей'
			)
	}, [])

	return (
		<MainLayout>
			<TherapyServicesContainer />
		</MainLayout>
	)
}

export default TherapyServicesPage
