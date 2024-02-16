import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './services-card.module.scss'

const ChildServicesCard = ({ title }) => {
	const cardInfoList = useMemo(
		() => [
			{
				id: 0,
				title: 'Болит зуб',
				information: 'Боль в зубах, кариес, пульпит, переодонтит',
				type: 'Терапия',
				href: '/therapy-service'
			},
			{
				id: 1,
				title: 'Зубной налёт',
				information: 'Профессиональная гигиена и обучение правильному уходу за полостью рта в домашних условиях',
				type: 'Профгигиена',
				href: '/periodontics-services'
			},
			{
				id: 2,
				title: 'Протезирование зубов',
				information: 'Коронки на временные зубы, восстановление молочных зубов',
				type: 'Ортопедия',
				href: '/orthopedics-services'
			},
			{
				id: 3,
				title: 'Исправление прикуса',
				information: 'Правильный прикус с помощью брекетов, элайнеров',
				type: 'Ортодонтия',
				href: '/orthodontics-services'
			},
			{
				id: 4,
				title: 'Удаление зубов, пластика уздечки',
				information: 'Бережное удаление молочных зубов, пластика уздечки языка и лечение на костной опоре',
				type: 'Детская хирургия',
				href: '/surgery-services'
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
			{title && <h1 className={cl.title}>{title}</h1>}
			<div className="services-tabsContent d-grid">
				{cardInfoList.map(({ id, title, information, type, href, imgSrc }) =>
					imgSrc ? (
						<div className={cl.card}>
							<img className={cl.cardImg} src={imgSrc} alt="asd" />
						</div>
					) : (
						<Link key={id} className={cl.card} to={href}>
							<div className={cl.cardTextWrapper}>
								<div className={cl.cardTitle}>{title}</div>
								<div className={cl.cardInformation}>{information}</div>
							</div>
							<div className={cl.cardType}>{type}</div>
						</Link>
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
