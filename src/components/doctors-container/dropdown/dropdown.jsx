import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import dropDown from '@assets/img/doctors/arrow-down.svg'

import cl from '@components/doctors-container/dropdown/dropdown.module.scss'

const Dropdown = ({directions = [], onChange}) => {
	const directionsList = useMemo(
		() => [
			{
				id: -1,
				name: 'Все'
			},
			...directions
		],
		[directions]
	)

	const [selectedId, setSelectedId] = useState(directionsList[0]?.id)

	const selectHandler = (id) => {
		setSelectedId(id)

		if (selectedId === id) {
			return
		}

		if (id === -1) {
			onChange([])
			return
		}

		onChange([id])
	}

	const selectedOption = directionsList.find(({ id }) => id === selectedId)

	return (
		<div className={cn([cl.link, 'd-flex', 'align-items-center', ])}>
			<div className={cn([cl.linkTitle, 'd-flex', 'justify-content-space-between','mb-0'])}>{selectedOption?.name}</div>
			 <img src={dropDown} alt="" />
			<div className={cn([cl.linkMenu, 'd-flex', 'flex-column'])}>
				<div className={cn([cl.content, 'd-flex', 'flex-column'])}>
					<div className={cn([cl.contentAdditionalLinks, 'd-flex', 'flex-column'])}>
						{directionsList.map(({ id, name: text }) => (
							<div onClick={() => selectHandler(id)} key={id}>
								{/*<div className={cn([cl.line, 'd-flex'])}>*/}
								<div className={`${cl.line} ${selectedId === id ? cl.active : ''}`}>
									<div className={cl.point}></div>
									<div className={cl.text}>{text}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
