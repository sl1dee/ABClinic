import cn from 'classnames'
import React, { useMemo } from 'react'

import cl from './services-card.module.scss'

const ChildServicesCard = ({ title }) => {
	const cardInfoList = useMemo(
		() => [
			{
				id: 0,
				title: 'Болит зуб',
				information: 'Боль в зубах, кариес, пульпит, переодонтит',
				type: 'Терапия'
			},
			{
				id: 1,
				title: 'Зубной налёт',
				information: 'Профессиональная гигиена и обучение правильному уходу за полостью рта в домашних условиях',
				type: 'Профгигиена'
			},
			{
				id: 2,
				title: 'Протезирование зубов',
				information: 'Коронки на временные зубы, восстановление молочных зубов',
				type: 'Ортопедия'
			},
			{
				id: 3,
				title: 'Исправление прикуса',
				information: 'Правильный прикус с помощью брекетов, элайнеров',
				type: 'Ортодонтия'
			},
			{
				id: 4,
				title: 'Удаление зубов, пластика уздечки',
				information: 'Бережное удаление молочных зубов, пластика уздечки языка и лечение на костной опоре',
				type: 'Детская хирургия'
			},
			{
				id: 5,
				imgSrc: '/media/services/one.jpeg'
			}
		],
		[]
	)

	return (
		<div className={cl.wrapper}>
			{title && <h2 className={cl.title}>{title}</h2>}
			<div className="services-tabsContent d-grid">
				{cardInfoList.map(({ id, title, information, type, imgSrc }) =>
					imgSrc ? (
						<div className={cl.card}>
							<img className={cl.cardImg} src={imgSrc} alt="asd" />
						</div>
					) : (
						<div key={id} className={cl.card}>
							<div className={cl.cardTextWrapper}>
								<div className={cl.cardTitle}>{title}</div>
								<div className={cl.cardInformation}>{information}</div>
							</div>
							<div className={cl.cardType}>{type}</div>
						</div>
					)
				)}
				<div className="additionalImage d-none d-md-block">
					<img src="/media/services/childs.svg" alt="" />
				</div>
			</div>
		</div>
	)
}

export default ChildServicesCard
