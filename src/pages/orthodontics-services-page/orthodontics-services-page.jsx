import { useEffect } from 'react'

import OrthodonticsServicesContainer from '@components/orthodontics-services-container'

import MainLayout from '../../layout/main/main-layout.jsx'

const OrthodonticsServicesPage = () => {
	useEffect(() => {
		document.title = 'Брекеты, Элайнеры | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Брекеты, Элайнеры | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				'Ортодонтия: брекеты и элайнеры - важный шаг на пути к идеальной улыбке и здоровью ваших зубов'
			)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute(
				'content',
				'Ортодонтия: брекеты и элайнеры - важный шаг на пути к идеальной улыбке и здоровью ваших зубов'
			)
	}, [])

	return (
		<MainLayout>
			<OrthodonticsServicesContainer />
		</MainLayout>
	)
}

export default OrthodonticsServicesPage
