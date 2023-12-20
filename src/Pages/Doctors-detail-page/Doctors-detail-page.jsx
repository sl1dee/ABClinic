import React from 'react'
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
	)
}

export default DoctorsDetailPage