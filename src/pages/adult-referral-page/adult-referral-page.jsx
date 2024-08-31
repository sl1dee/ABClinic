import { useEffect } from 'react'

import AdultReferralContainer from '@components/adult-referral-container'

import MainLayout from '../../layout/main/index.js'

const AdultReferralPage = () => {
	useEffect(() => {
		document.title = 'Взрослое направление | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Взрослое направление | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', 'Стоматология для взрослых - поможем решить ваши проблемы путем доказательной медицины')
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute('content', 'Стоматология для взрослых - поможем решить ваши проблемы путем доказательной медицины')
	}, [])

	return (
		<MainLayout>
			<AdultReferralContainer />
		</MainLayout>
	)
}

export default AdultReferralPage
