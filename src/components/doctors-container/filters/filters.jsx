import arrDown from '@assets/img/header/arr_down.svg'
import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import cl from './filters.module.scss'

const Filters = () => {
	const filtersList = useMemo(
		() => [
			{
				id: 0,
				text: 'Все'
			},
			{
				id: 1,
				text: 'Стоматолог-ортопед'
			},
			{
				id: 2,
				text: 'Ортодонт'
			},
			{
				id: 3,
				text: 'Пародонтолог'
			},
			{
				id: 4,
				text: 'Эндодонтист'
			},
			{
				id: 5,
				text: 'Стоматолог-хирург'
			},
			{
				id: 6,
				text: 'Стоматолог-терапевт'
			},
			{
				id: 7,
				text: 'Стоматолог общей практики'
			}
		],
		[]
	)
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
			<div className={cl.selectorWrapper}>
				{/* <div className={cl.selector}>Детские и взрослые</div> */}
				<select className={cl.selector} name="" id="" aria-placeholder="Детские и взрослые">
					<option className={cl.selectorOption} value="">
						Детские и взрослые
					</option>
					<option className={cl.selectorOption} value="">
						Дети
					</option>
					<option className={cl.selectorOption} value="">
						Взрослые
					</option>
				</select>
				{/* <div className={cn([cl.link, 'd-flex', 'align-items-center'])}> */}
				{/*	<div className={cn([cl.linkTitle, 'mb-0'])}>Детские и взрослые</div> */}
				{/*	/!* <img src={arrDown} alt="" /> *!/ */}
				{/*	<div className={cn([cl.linkMenu, 'd-flex', 'flex-column'])}> */}
				{/*		<div className={cn([cl.content, 'd-flex', 'flex-column'])}> */}
				{/*			/!* <div className={cl.contentBigLink}> *!/ */}
				{/*			/!*	<span>Направления</span> *!/ */}
				{/*			/!* </div> *!/ */}
				{/*			<div className={cn([cl.contentAdditionalLinks, 'd-flex', 'flex-column'])}> */}
				{/*				<div> */}
				{/*					<Link to="/doctors"> */}
				{/*						<span>Детские и взрослые</span> */}
				{/*					</Link> */}
				{/*				</div> */}
				{/*				<div> */}
				{/*					<Link to="/doctors"> */}
				{/*						<span>Дети</span> */}
				{/*					</Link> */}
				{/*				</div> */}
				{/*				<div> */}
				{/*					<Link to="/doctors"> */}
				{/*						<span>Взрослые</span> */}
				{/*					</Link> */}
				{/*				</div> */}
				{/*			</div> */}
				{/*		</div> */}
				{/*	</div> */}
				{/* </div> */}
			</div>
			<div className={cl.filtersList}>
				{filtersList.slice(0, isFull ? undefined : START_FILTERS_LENGTH).map(({ id, text }) => (
					<div key={id} className={cl.filtersItem}>
						<span className={cl.item}>{text}</span>
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
