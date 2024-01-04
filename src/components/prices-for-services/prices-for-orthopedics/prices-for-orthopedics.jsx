import cn from 'classnames'
import React from 'react'

import cl from '../prices.module.scss'

const PricesForOrthopedics = () => {
	const pricesList = [
		{
			id: 0,
			title: 'Терапия взрослая',
			item: [
				{
					id: 0,
					service: 'Название услуги',
					cost: '0 000 ₽'
				},
				{
					id: 1,
					service: 'Название услуги',
					cost: '0 000 ₽'
				}
			]
		},
		{
			id: 1,
			title: 'Терапия детская',
			item: [
				{
					id: 0,
					service: 'Название услуги',
					cost: '0 000 ₽'
				},
				{
					id: 1,
					service: 'Название услуги',
					cost: '0 000 ₽'
				}
			]
		}
	]
	return (
		<div className={cl.prices}>
			<div className="container">
				<h3 className={cn([cl.pricesTitle, 'd-flex', 'mb-0'])}>Услуги по лечению зубов</h3>
				<div className={cn([cl.inputWrapper])}>
					<input className={cl.input} placeholder="Поиск по услугам" />
				</div>
				<div className={cn([cl.pricesList, 'd-flex', 'flex-column'])}>
					{pricesList.map(({ title, id, item }) => (
						<div key={id}>
							<h4 className={cn([cl.title, 'd-flex', 'mb-0'])}>{title}</h4>
							<div className={cn([cl.informationLines, 'd-flex', 'flex-column'])}>
								{item.map(({ service, cost }) => (
									<div className={cn([cl.information, 'd-flex'])}>
										<span className={cl.service}>{service}</span>
										<span className={cl.cost}>{cost}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PricesForOrthopedics
