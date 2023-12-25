import React from 'react'

import EmployeesSlider from '@components/employees-slider'

import DoctorsDetailContainer from '../../components/Doctors-detail-container/doctors-detail-container.jsx'
import OurWorks from '../../components/OurWorks/OurWorks.jsx'

const DoctorsDetailPage = () => {
	return (
		<>
			<DoctorsDetailContainer />
			<OurWorks />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" />
		</>
	)
}

export default DoctorsDetailPage
