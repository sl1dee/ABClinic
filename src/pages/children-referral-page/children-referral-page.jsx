import { useEffect } from 'react'

import ChildrenReferralContainer from '@components/children-referral-container/index.js'

import MainLayout from '../../layout/main/index.js'

const ChildrenReferralPage = () => {
	useEffect(() => {
		document.title = 'Детское направление | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Детское направление | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				'В нашей стоматологии на приеме дети улыбаются без боли и страха, к каждому ребенку найдется свой подход'
			)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute(
				'content',
				'В нашей стоматологии на приеме дети улыбаются без боли и страха, к каждому ребенку найдется свой подход'
			)
	}, [])

	return (
		<MainLayout>
			<ChildrenReferralContainer />
		</MainLayout>
	)
}

export default ChildrenReferralPage
