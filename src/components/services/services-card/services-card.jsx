import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './services-card.module.scss'

const ServicesCard = ({ title }) => {
	const cardInfoList = useMemo(
		() => [
			{
				id: 0,
				title: 'Лечение зубов',
				information: 'Боль в зубах, кариес, пульпит, переодонтит',
				type: 'Терапия',
				href: '/therapy-service'
			},
			{
				id: 1,
				title: 'Имплантация',
				information: 'Протезирование на имплантатах, коронки, виниры, керамические накладки',
				type: 'Ортопедия',
				href: '/orthopedics-services'
			},
			{
				id: 2,
				title: 'Удаление зубов',
				information: 'Удаление зубов мудрости, кисты зуба, ретинированного зуба',
				type: 'Хирургия',
				href: '/surgery-services'
			},
			{
				id: 3,
				title: 'Брекеты, элайнеры',
				information: 'Диагностика, 3D план лечения, установка, наблюдение',
				type: 'Ортодонтия',
				href: '/orthodontics-services'
			},
			{
				id: 4,
				title: 'Лечение дёсен',
				information: 'Боль, кровоточивость в дёснах, запах изо рта, пародонтит, гингивит, налёт и зубной кариес',
				type: 'Пародонтология',
				href: '/periodontics-services'
			},
			{
				id: 5,
				imgSrc: '/media/services/chair.jpg'
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

						// </div>
					)
				)}
			</div>
		</div>
	)
}

export default ServicesCard
