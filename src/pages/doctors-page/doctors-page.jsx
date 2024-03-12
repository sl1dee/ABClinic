import React, { useEffect } from 'react'

import DoctorsContainer from '@components/doctors-container'

import MainLayout from '../../layout/main/index.js'

const DoctorsPage = () => {
	useEffect(() => {
		document.title = 'Специалисты | AB Clinic'
		document.querySelector('meta[property="og:title"]').setAttribute('content', 'Специалисты | AB Clinic')
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', 'Квалифицированные специалисты нашей клиники - залог вашей счастливой улыбки')
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute('content', 'Квалифицированные специалисты нашей клиники - залог вашей счастливой улыбки')
	}, [])

	return (
		<MainLayout>
			<DoctorsContainer />
		</MainLayout>
	)
}

export default DoctorsPage
