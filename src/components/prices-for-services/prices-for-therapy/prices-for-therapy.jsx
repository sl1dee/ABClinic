import React from 'react'

const PricesForTherapy = () => {
	const pricesList = [
		{
			id: 0,
			title: 'Терапия взрослая',
			item: [
				{
					id: 0,
					service: 'Название услуги',
					cost: '0 000 ₽'
				},
				{
					id: 1,
					service: 'Название услуги',
					cost: '0 000 ₽'
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
					cost: '0 000 ₽'
				},
				{
					id: 1,
					service: 'Название услуги',
					cost: '0 000 ₽'
				}
			]
		}
	]
	return (
		<div>
			<h3>Услуги по лечению зубов</h3>
			<div>Фильтр</div>
			<div>Поиск</div>
			<div>
				{pricesList.map(({ title, id, item }) => (
					<div key={id}>
						<h4>{title}</h4>
						{item.map(({ id, service, cost }) => (
							<div key={id}>
								<span>{service}</span>
								<span>{cost}</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default PricesForTherapy
