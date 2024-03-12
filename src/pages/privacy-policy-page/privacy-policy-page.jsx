import { useEffect } from 'react'

import PrivacyPolicy from '@components/privacy-policy/index.js'

import MainLayout from '../../layout/main/index.js'

const PrivacyPolicyPage = () => {
	useEffect(() => {
		document.title = 'Правовая информация | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Правовая информация | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', 'Политика в отношении обработки персональных данных Семейной стоматологии - AB Clinic')
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute('content', 'Политика в отношении обработки персональных данных Семейной стоматологии - AB Clinic')
	}, [])

	return (
		<MainLayout>
			<PrivacyPolicy />
		</MainLayout>
	)
}

export default PrivacyPolicyPage
