import useMatchMedia from '@hooks/use-match-media.js'
import React, { useMemo, useState } from 'react'

import Dropdown from '@components/doctors-container/dropdown/index.js'

import cl from './filters.module.scss'

const Filters = ({ directions = [], filters = [], selectedFilters = [], onFiltersChange, onDirectionsChange }) => {
	const filtersList = useMemo(
		() => [
			{
				id: -1,
				name: 'Все'
			},
			...filters
		],
		[filters]
	)

	const changeHandler = (id) => {
		if (id === -1) {
			onFiltersChange([])
			return
		}

		if (selectedFilters.includes(id) && selectedFilters.length > 1) {
			onFiltersChange(selectedFilters.filter((selectedId) => selectedId !== id))

			return
		}

		onFiltersChange([...new Set([...selectedFilters, id])])
	}
	const { isDesktop } = useMatchMedia()

	const filtersPerView = useMemo(() => {
		switch (true) {
			case isDesktop:
				return 3
			default:
				return 5
		}
	}, [isDesktop])

	const START_FILTERS_LENGTH = filtersPerView
	const [isFull, setIsFull] = useState(false)
	const restFiltersLength = filtersList.length - START_FILTERS_LENGTH

	const openFull = () => {
		setIsFull(true)
	}

	return (
		<div className={cl.filtersWrapper}>
			<div>
				<Dropdown directions={directions} onChange={onDirectionsChange} />
			</div>
			<div className={cl.filtersList}>
				{filtersList.slice(0, isFull ? undefined : START_FILTERS_LENGTH).map(({ id, name: text }) => (
					<div onClick={() => changeHandler(id)} key={id} className={cl.filtersItem}>
						<span
							className={`${cl.item} ${
								(id === -1 && !selectedFilters.length) || selectedFilters.includes(id) ? cl.active : ''
							}`}
						>
							{text}
						</span>
					</div>
				))}
				{!isFull && restFiltersLength > 0 && (
					<button onClick={openFull} className={cl.item}>
						+{restFiltersLength}
					</button>
				)}
			</div>
		</div>
	)
}

export default Filters
