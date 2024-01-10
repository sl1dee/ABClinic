import { useGetServiceFilteredQuery, useGetServicesFiltersQuery } from '@store/modules/filters-api.js'
import cn from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'

import Filters from '@ui/filters/index.js'

import cl from '../prices.module.scss'

const PricesForTherapy = () => {
	const [selectedFilters, setSelectedFilters] = useState([])

	const { data: filters = [] } = useGetServicesFiltersQuery('Лечение зубов')
	const { data: services = {} } = useGetServiceFilteredQuery({ service: 'Лечение зубов', subServices: selectedFilters })

	const pricesList = useMemo(
		() =>
			Object.entries(services).map(([key, value], index) => ({
				id: index,
				title: key,
				item: value.map(({ name, price }, itemIndex) => ({
					id: itemIndex,
					service: name,
					cost: `${price} ₽`
				}))
			})),
		[services]
	)

	return (
		<div className={cl.prices}>
			<div className="container">
				<h3 className={cn([cl.pricesTitle, 'd-flex', 'mb-0'])}>Услуги по лечению зубов</h3>
				<Filters filters={filters} selectedFilters={selectedFilters} onChange={setSelectedFilters} />
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

export default PricesForTherapy
