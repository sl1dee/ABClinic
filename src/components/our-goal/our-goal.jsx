import flag from '@media/loyaltyProgram/flag.png'
import cn from 'classnames'
import React from 'react'

import cl from './our-goal.module.scss'

const OurGoal = () => {
	return (
		<div className={cl.ourGoal}>
			<div
				className={cn([
					cl.ourGoalWrapper,
					'container',
					'd-flex',
					'flex-column',
					'align-items-center',
					'justify-content-center'
				])}
			>
				<div className={cn([cl.block1, 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center'])}>
					<div className={cl.block1Question}>Почему?</div>
					<div className={cl.block1Description}>Наша цель — продвигать профилактику болезней, а не их лечение</div>
					<div className={cl.block1Look}>Посмотрите интересный факт👇</div>
				</div>
				<div className={cn([cl.group, 'd-flex', 'flex-column', 'flex-lg-row'])}>
					<div className={cn([cl.groupBlock2])}>
						<div className={cl.groupBlock2Description}>
							У финнов редко бывает кариес, а большинство людей к 60 годам по-прежнему имеют собственные здоровые зубы!
						</div>
						<img src={flag} alt="" />
					</div>
					<div className={cn([cl.groupBlock3, 'd-flex', 'flex-column'])}>
						<div className={cl.groupBlock3Cause}>Причина</div>
						<div className={cl.groupBlock3Title}>Другой подход к профилактике заболеваний</div>
						<div className={cn([cl.groupBlock3Group, 'd-flex', 'flex-column', 'flex-xl-row'])}>
							<div className={cl.groupBlock3GroupDescription}>Их с детства обучают правильному уходу за зубами</div>
							<div className={cl.groupBlock3GroupDescription}>
								Они занимаются системной профилактикой, т. е. регулярно посещают врача-гигиениста
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurGoal
