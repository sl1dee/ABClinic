import React from 'react'

import Education from '@components/doctors-detail-container/education'
import HeroScreen from '@components/doctors-detail-container/hero-screen'
import EmployeesSlider from '@components/employees-slider'
import SignUp from '@components/sign-up'

import cl from './doctors-detail-container.module.scss'

const DoctorsDetailContainer = () => {
	return (
		<div className={cl.doctorsDetail}>
			<HeroScreen />
			<Education />
			{/* <OurWorks /> */}
			<SignUp />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" />
		</div>
	)
}

export default DoctorsDetailContainer
