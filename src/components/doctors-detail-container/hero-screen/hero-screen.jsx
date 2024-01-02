import portrait from '@media/heroScreen/aliya1920.jpg'
import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

import cl from '@components/doctors-detail-container/hero-screen/hero-screen.module.scss'

const HeroScreen = () => {
	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	const doctorsList = useMemo(
		() => [
			{
				id: 0,
				// img: '/media/heroScreen/aliya1920.jpg',
				// classImg: cl.detailDoctorImage,
				name: 'Алия Беглова',
				qualification: 'Врач-ортодонт',
				price: 'от 2500',
				information: 'Взрослый и детский врач'
			}
		],
		[]
	)

	return (
		<div className={cl.detailHeroScreen}>
			<div className="container">
				{doctorsList.map(({ id, name, qualification, price, information }) => (
					<div key={id} className={cn([cl.detailInformation, 'd-flex', 'flex-column-reverse', 'flex-md-row'])}>
						<div className={cn([cl.detailInformationBlock, 'd-flex', 'flex-column'])}>
							<div className={cl.detailInformationBlockName}>{name}</div>
							<div className={cl.detailInformationBlockQualification}>{qualification}</div>
							<div className={cl.detailInformationBlockPrice}>{price}</div>
							<div className={cn(cl.detailInformationBlockInformation, 'd-flex')}>{information}</div>
							<div className={cl.bckgIcon} />
							<div className={cn([cl.appointment, 'd-flex', 'flex-column'])}>
								<Button onClick={openModalHandler} className={cl.btn}>
									Записаться
								</Button>
								<div className={cl.appointmentText}>Ближайшая запись врача: с 1 декабря в 09:00</div>
							</div>
						</div>
						<img src={portrait} className={cl.detailInformationPortrait} alt="" />
						{/* <img src={img} className={cl.detailInformationPortrait} alt="doctorImage" /> */}
						{/* <div className={cl.detailInformationPortrait} /> */}
					</div>
				))}
			</div>
		</div>
	)
}

export default HeroScreen
