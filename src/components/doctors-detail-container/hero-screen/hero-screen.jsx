import portrait from '@media/heroScreen/aliya1920.jpg'
import { useGetDoctorQuery } from '@store/modules/doctors-api.js'
import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Button from '@ui/button/index.js'

import cl from '@components/doctors-detail-container/hero-screen/hero-screen.module.scss'

const HeroScreen = () => {
	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}
	const { id: doctorId } = useParams()
	const { data: doctorsList = [] } = useGetDoctorQuery(doctorId)

	return (
		<div className={cl.detailHeroScreen}>
			<div className="container">
				{doctorsList.map(({ id, name, image, speciality, price, direction }) => (
					<div key={id} className={cn([cl.detailInformation, 'd-flex', 'flex-column-reverse', 'flex-md-row'])}>
						<div className={cn([cl.detailInformationBlock, 'd-flex', 'flex-column'])}>
							<div className={cl.detailInformationBlockName}>{name}</div>
							<div className={cl.detailInformationBlockQualification}>
								{speciality.map(({ name: specialityName }) => specialityName)}
							</div>
							<div className={cl.detailInformationBlockPrice}>от {price} ₽</div>
							<div className={cn(cl.detailInformationBlockInformation, 'd-flex')}>
								{direction.map(({ name: directionName }) => directionName)}
							</div>
							<div className={cl.bckgIcon} />
							<div className={cn([cl.appointment, 'd-flex', 'flex-column'])}>
								<Button onClick={openModalHandler} className={cl.btn}>
									Записаться
								</Button>
								<div className={cl.appointmentText}>Ближайшая запись врача: с 1 декабря в 09:00</div>
							</div>
						</div>
						<img src={image} className={cl.detailInformationPortrait} alt="" />
						{/* <img src={img} className={cl.detailInformationPortrait} alt="doctorImage" /> */}
						{/* <div className={cl.detailInformationPortrait} /> */}
					</div>
				))}
			</div>
		</div>
	)
}

export default HeroScreen
