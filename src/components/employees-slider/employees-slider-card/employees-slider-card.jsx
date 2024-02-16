import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

import cl from './employees-slider-card.module.scss'

const EmployeesSliderCard = ({ img, name, qualification, information }) => {
	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	return (
		<div>
			<div className={cl.photo}>
				<img src={img} alt="" />
			</div>
			<div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
				<div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
					<p className={cn([cl.infoTextName, 'mb-0'])}>{name}</p>
					{qualification.map(({ name: qualName }) => (
						<p className={cn([cl.infoTextPosition, 'mb-0'])}>{qualName}</p>
					))}
				</div>
				{information && information.length > 0 && (
					<div className={cl.infoBadge}>
						{information.map(({ name: infoName }) => (
							<p className="mb-0" key={infoName}>
								{infoName}
							</p>
						))}
					</div>
				)}
				<Button
					onClick={openModalHandler}
					className={cn([cl.btn, 'd-block', 'd-xs-block', 'd-sm-block', 'd-md-block', 'd-lg-none'])}
				>
					Записаться
				</Button>
			</div>
		</div>
	)
}

export default EmployeesSliderCard
