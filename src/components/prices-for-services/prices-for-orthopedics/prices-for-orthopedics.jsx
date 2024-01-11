import { useGetServiceFilteredQuery, useGetServicesFiltersQuery } from '@store/modules/services-api.js'
import cn from 'classnames'
import React, { useMemo, useState } from 'react'

import Filters from '@ui/filters/index.js'

import cl from '../prices.module.scss'

const PricesForOrthopedics = () => {
	const [selectedFilters, setSelectedFilters] = useState([])

	const { data: filters = [] } = useGetServicesFiltersQuery('Ортопедия')
	const { data: services = { data: [] } } = useGetServiceFilteredQuery({
		service: 'Ортопедия',
		subServices: selectedFilters
	})

	const pricesList = useMemo(() => services.data.map(({sub_name, items}, index) => ({
		id: index,
		title: sub_name,
		item: items.map(({ name, price }, itemIndex) => ({
			id: itemIndex,
			service: name,
			cost: `${price} ₽`
		}))
	})), [services.data])

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={cl.prices}>
			<div className="container">
				<h3 className={cn([cl.pricesTitle, 'd-flex', 'mb-0'])}>Услуги по лечению зубов</h3>
				<Filters filters={filters} selectedFilters={selectedFilters} onChange={setSelectedFilters} />
				<div className={cn([cl.inputWrapper])}>
					<input className={cl.input} placeholder="Поиск по услугам" />
				</div>
				<div className={cn([cl.pricesList, 'd-flex', 'flex-column'])}>
					{isOpen ? (
						<div className={cl.blocks}>
							{pricesList.map(({ title, id, item }) => (
								<div key={id} className={cl.block}>
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
					) : (
						<div className={cl.blocks}>
							{pricesList.slice(0, 1).map(({ title, id, item }) => (
								<div key={id} className={cl.block}>
									<h4 className={cn([cl.title, 'd-flex', 'mb-0'])}>{title}</h4>
									<div className={cn([cl.informationLines, 'd-flex', 'flex-column'])}>
										{item.slice(0, 6).map(({ service, cost }) => (
											<div className={cn([cl.information, 'd-flex'])}>
												<span className={cl.service}>{service}</span>
												<span className={cl.cost}>{cost}</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					)}
					<button onClick={() => setIsOpen(!isOpen)} className={`${cl.btn} ${isOpen ? cl.btnclose : ''}`}>
						{`+${services?.total_count || 0}`}
					</button>
				</div>
			</div>
		</div>
	)
}

export default PricesForOrthopedics
