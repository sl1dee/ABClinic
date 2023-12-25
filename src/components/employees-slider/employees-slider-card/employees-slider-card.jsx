import aliya from '@media/employeesSlider/aliya.jpg'
import cn from 'classnames'

import cl from './employees-slider-card.module.scss'

const EmployeesSliderCard = () => {
	return (
		<>
			<div className={cl.photo}>
				<img src={aliya} alt="" />
			</div>
			<div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
				<div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
					<p className={cn([cl.infoTextName, 'mb-0'])}>Алия Беглова</p>
					<p className={cn([cl.infoTextPosition, 'mb-0'])}>Врач-ортодонт</p>
				</div>
				<div className={cl.infoBadge}>
					<p className="mb-0">Взрослый и детский врач</p>
				</div>
			</div>
		</>
	)
}

export default EmployeesSliderCard
