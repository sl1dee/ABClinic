import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

import cl from './hero-screen.module.scss'

const HeroScreen = ({ title, text, img }) => {
	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	return (
		<div className={cl.detailHeroScreen}>
			<div className="container">
				<div className={cn([cl.detailInformation, 'd-flex', 'flex-column-reverse', 'flex-md-row'])}>
					<div className={cn([cl.detailInformationBlock, 'd-flex', 'flex-column'])}>
						<div className={cl.detailInformationBlockName}>{title}</div>
						<div className="d-flex">
							<div className={cl.detailInformationBlockInformation}>{text}</div>
						</div>
						<div className={cl.bckgIcon} />
						<div className={cn([cl.appointment, 'd-flex', 'flex-column'])}>
							<Button onClick={openModalHandler} className={cl.btn}>
								Записаться
							</Button>
						</div>
					</div>
					<img src={img} className={cl.detailInformationPortrait} alt="doctorImage" />
					{/* <div className={cl.detailInformationPortrait} /> */}
				</div>
			</div>
		</div>
	)
}

export default HeroScreen
