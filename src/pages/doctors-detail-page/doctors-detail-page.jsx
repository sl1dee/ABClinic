import { useGetDoctorQuery } from '@store/modules/doctors-api.js'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import DoctorsDetailContainer from '@components/doctors-detail-container'

import MainLayout from '../../layout/main/index.js'

const DoctorsDetailPage = () => {
	const { id: doctorId } = useParams()
	const { data: doctor = false } = useGetDoctorQuery(doctorId)

	useEffect(() => {
		document.title = `${doctor.name} | AB Clinic`
		document.querySelector('meta[property="og:title"]').setAttribute('content', `${doctor.name} | AB Clinic`)
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				`Официальный сайт стоматологии AB Clinic - ${doctor.name}, стоматолог-терапевт. Запись на прием ☎ +7 (347) 200-04-24.`
			)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute(
				'content',
				`Официальный сайт стоматологии AB Clinic - ${doctor.name}, стоматолог-терапевт. Запись на прием ☎ +7 (347) 200-04-24.`
			)
	}, [])

	return (
		<MainLayout>
			<DoctorsDetailContainer />
		</MainLayout>
	)
}

export default DoctorsDetailPage
