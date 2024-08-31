import shield from '@media/loyaltyProgram/shield.png'
import tooth from '@media/loyaltyProgram/tooth.png'
import cn from 'classnames'
import React from 'react'

import Button from '@ui/button/index.js'

import cl from './loyalty-program.module.scss'

const LoyaltyProgram = ({ scrollToFourthComponent }) => {
	return (
		<div className={cl.loyalty}>
			<div className={cn([cl.loyaltyWrapper], 'container', 'd-flex', 'justify-content-center')}>
				<img src={shield} alt="" className={cl.shield} />
				<div className={cn([cl.description, 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center'])}>
					<div className={cl.descriptionText}>уникальная</div>
					<h1 className={cl.descriptionTitle}>Программа лояльности AB Clinic</h1>
					<div className="d-flex justify-content-center">
						<Button
							onClick={scrollToFourthComponent}
							colorStyle="primary"
							className={cn([cl.btn, 'd-flex', 'justify-content-center'])}
						>
							Записаться на прием и стать участником
						</Button>
					</div>
				</div>
				<img src={tooth} alt="" className={cl.tooth} />
			</div>
		</div>
	)
}

export default LoyaltyProgram
