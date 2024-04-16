import pic1 from '@media/loyaltyProgram/pic1.png'
import pic2 from '@media/loyaltyProgram/pic2.png'
import pic3 from '@media/loyaltyProgram/pic3.png'
import road1 from '@media/loyaltyProgram/road1.svg'
import road2 from '@media/loyaltyProgram/road2.svg'
import cn from 'classnames'
import React from 'react'

import cl from './how-it-works.module.scss'

const HowItWorks = () => {
	return (
		<div className={cl.howItWorks}>
			<div
				className={cn([
					cl.howItWorksWrapper,
					'container',
					'd-flex',
					'flex-column',
					'align-items-center',
					'justify-content-center'
				])}
			>
				<h2 className={cn([cl.howItWorksWrapperTitle, 'mb-0'])}>Как это работает?</h2>
				<div className={cn([cl.howItWorksWrapperGroup, 'd-flex', 'flex-column'])}>
					<div className={cn([cl.block1, 'd-flex', 'flex-column', 'flex-md-row', 'align-items-center'])}>
						<img src={pic1} alt="" />
						<div className={cn([cl.textGroup, 'd-flex', 'flex-column'])}>
							<div className={cl.textGroupTitle}>Пройдите полное лечение</div>
							<div className={cl.textGroupDescription}>по результатам КТ в нашей клинике</div>
						</div>
					</div>
					<img src={road1} alt="" className={cl.road1} />
					<div
						className={cn([
							cl.block2,
							'd-flex',
							'flex-column-reverse',
							'flex-column',
							'flex-md-row',
							'align-items-center'
						])}
					>
						<div className={cn([cl.textGroup, 'd-flex', 'flex-column'])}>
							<div className={cl.textGroupTitle}>Делайте профессиональную гигиену полости рта</div>
							<div className={cl.textGroupDescription}>1 раз в 4 месяца в нашей клинике</div>
						</div>
						<img src={pic2} alt="" />
					</div>
					<img src={road2} alt="" className={cl.road2} />
					<div className={cn([cl.block3, 'd-flex', 'flex-column', 'flex-md-row', 'align-items-center'])}>
						<img src={pic3} alt="" />
						<div className={cn([cl.textGroup, 'd-flex', 'flex-column'])}>
							<div className={cl.textGroupTitle}>И если у вас появится кариес, мы вылечим его</div>
							<div className={cl.textGroupDescription}>БЕСПЛАТНО</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowItWorks
