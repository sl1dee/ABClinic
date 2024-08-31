import React, {useEffect} from 'react'

import Education from '@components/doctors-detail-container/education'
import HeroScreen from '@components/doctors-detail-container/hero-screen'
import EmployeesSlider from '@components/employees-slider'
import SignUp from '@components/sign-up'
import { useGetDoctorQuery } from '@store/modules/doctors-api.js'

import cl from './doctors-detail-container.module.scss'
import {useParams} from "react-router-dom";

const DoctorsDetailContainer = () => {
	
	const { id: doctorId } = useParams()
	const { data: doctor = false } = useGetDoctorQuery(doctorId)
	
	useEffect(()=>{
		window.scroll(0, 0)
	}, [doctorId])
	
	if(doctor){
		return (
			<div className={cl.doctorsDetail}>
				<HeroScreen speciality={doctor.speciality} direction={doctor.direction} image={doctor.image} price={doctor.price} name={doctor.name}/>
				{
					doctor?.education?.length &&
					<Education education={doctor.education}/>
				}
				{/* <OurWorks /> */}
				<SignUp />
				<EmployeesSlider sliderHeaderText="Врачи по направлению" isViewAll />
			</div>
		)
	}
}

export default DoctorsDetailContainer
