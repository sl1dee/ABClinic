import React from 'react'

import Education from '@components/doctors-detail-container/education'
import HeroScreen from '@components/doctors-detail-container/hero-screen'
import EmployeesSlider from '@components/employees-slider'
import OurWorks from '@components/our-works'
import SignUp from '@components/sign-up'

const DoctorsDetailContainer = () => {
	return (
		<>
			<HeroScreen />
			<Education />
			{/* <OurWorks /> */}
			<SignUp />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" />
		</>
	)
}

export default DoctorsDetailContainer
