import { useEffect } from 'react'

import OrthopedicsServicesContainer from '@components/orthopedics-services-container'

import MainLayout from '../../layout/main/index.js'

const OrthopedicsServicesPage = () => {
	useEffect(() => {
		document.title = 'Ортопедия | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Ортопедия | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', 'Импланты, виниры и коронки для устранения небольших несовершенств вашей улыбки')
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute('content', 'Импланты, виниры и коронки для устранения небольших несовершенств вашей улыбки')
	}, [])

	return (
		<MainLayout>
			<OrthopedicsServicesContainer />
		</MainLayout>
	)
}

export default OrthopedicsServicesPage
