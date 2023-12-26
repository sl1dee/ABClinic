import React from 'react'

import DoctorsDetailContainer from '@components/doctors-detail-container'
import Education from '@components/doctors-detail-container/education'
import EmployeesSlider from '@components/employees-slider'

import OurWorks from '../../components/our-works/our-works.jsx'
import MainLayout from '../../layout/main/index.js'

const DoctorsDetailPage = () => {
	return (
		<MainLayout>
			<DoctorsDetailContainer />
			<Education />
			<OurWorks />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" />
		</MainLayout>
	)
}

export default DoctorsDetailPage
