import React from 'react'

<<<<<<< HEAD
import DoctorsDetailContainer from '../../components/Doctors-detail-container/doctors-detail-container.jsx'
import EmployeesSlider from '../../components/EmployeesSlider/EmployeesSlider.jsx'
import OurWorks from '../../components/OurWorks/OurWorks.jsx'

const DoctorsDetailPage = () => {
	return (
		<>
			<DoctorsDetailContainer />
			<OurWorks />
			<EmployeesSlider />
		</>
=======
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
>>>>>>> 9afa50dde4363cb1c999d9d6b679b656d3752203
	)
}

export default DoctorsDetailPage
