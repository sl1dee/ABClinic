import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

import cl from '@components/doctors-detail-container/hero-screen/hero-screen.module.scss'

const HeroScreen = (props) => {
	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	return (
		<div className={cl.detailHeroScreen}>
			<div className="container">
				<div className={cn([cl.detailInformation, 'd-flex', 'flex-column-reverse', 'flex-md-row'])}>
					<div className={cn([cl.detailInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cl.detailInformationBlockName}>{props.name}</div>
						<div className={cl.detailInformationBlockQualification}>
							{props.speciality.map(({ name: specialityName }) => specialityName)}
						</div>
						{props.price && <div className={cl.detailInformationBlockPrice}>от {props.price} ₽</div>}
						{props.direction && props.direction.length > 0 && (
							<div className={cn(cl.detailInformationBlockInformation, 'd-flex')}>
								{props.direction.map(({ name: directionName }) => directionName)}
							</div>
						)}
						<div className={cl.bckgIcon} />
						<div className={cn([cl.appointment, 'd-flex', 'flex-column'])}>
							<Button onClick={openModalHandler} className={cl.btn}>
								Записаться
							</Button>
							<div className={cl.appointmentText}>Запишитесь и получите план лечения</div>
						</div>
					</div>
					<img src={props.image} className={cl.detailInformationPortrait} alt="" />
					{/* <img src={img} className={cl.detailInformationPortrait} alt="doctorImage" /> */}
					{/* <div className={cl.detailInformationPortrait} /> */}
				</div>
			</div>
		</div>
	)
}

export default HeroScreen
