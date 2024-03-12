import React, { useEffect } from 'react'

import Contacts from '@components/contacts'

import MainLayout from '../../layout/main'

const ContactsPage = () => {
	useEffect(() => {
		document.title = 'О клинике | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'О клинике | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				'Контактная информация AB Clinic. Среди наших услуг лечение кариеса, исправление прикуса, установка брекетов и элайнеров, профессиональная гигиена'
			)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute(
				'content',
				'Контактная информация AB Clinic. Среди наших услуг лечение кариеса, исправление прикуса, установка брекетов и элайнеров, профессиональная гигиена'
			)
	}, [])

	return (
		<MainLayout>
			<Contacts />
		</MainLayout>
	)
}

export default ContactsPage
