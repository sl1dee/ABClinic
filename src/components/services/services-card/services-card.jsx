import cn from 'classnames'
import React, { useMemo } from 'react'

import cl from './services-card.module.scss'

const ServicesCard = ({ title }) => {
	const cardInfoList = useMemo(
		() => [
			{
				id: 0,
				title: 'Лечение зубов',
				information: 'Боль в зубах, кариес, пульпит, переодонтит',
				type: 'Терапия'
			},
			{
				id: 1,
				title: 'Имплантация',
				information: 'Протезирование на имплантатах, коронки, виниры, керамические накладки',
				type: 'Ортопедия'
			},
			{
				id: 2,
				title: 'Удаление зубов',
				information: 'Удаление зубов мудрости, кисты зуба, ретинированного зуба',
				type: 'Хирургия'
			},
			{
				id: 3,
				title: 'Брекеты, элайнеры',
				information: 'Диагностика, 3D план лечения, установка, наблюдение',
				type: 'Ортодонтия'
			},
			{
				id: 4,
				title: 'Лечение дёсен',
				information: 'Боль, кровоточивость в дёснах, запах изо рта, пародонтит, гингивит, налёт и зубной кариес',
				type: 'Пародонтология'
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
			</div>
		</div>
	)
}

export default ServicesCard
