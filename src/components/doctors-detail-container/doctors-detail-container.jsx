import React from 'react'

import Education from '@components/doctors-detail-container/education'
import HeroScreen from '@components/doctors-detail-container/hero-screen'
import EmployeesSlider from '@components/employees-slider/index.js'
import OurWorks from '@components/our-works'

const DoctorsDetailContainer = () => {
	return (
		<>
			<HeroScreen />
			<Education />
			<OurWorks />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" />
		</>
	)
}

export default DoctorsDetailContainer
