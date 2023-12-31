import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import cl from '@components/doctors-container/dropdown/dropdown.module.scss'

const Dropdown = () => {
	const optionsList = useMemo(
		() => [
			{
				id: 0,
				text: 'Детские и взрослые'
			},
			{
				id: 1,
				text: 'Дети'
			},
			{
				id: 2,
				text: 'Взрослые'
			}
		],
		[]
	)

	const [selectedId, setSelectedId] = useState(optionsList[0].id)

	const selectedOption = optionsList.find(({ id }) => id === selectedId)

	const selectHandler = (id) => {
		setSelectedId(id)
	}

	return (
		<div className={cn([cl.link, 'd-flex', 'align-items-center', ])}>
			<div className={cn([cl.linkTitle, 'd-flex', 'justify-content-space-between','mb-0'])}>{selectedOption?.text}</div>
			 <img src='/assets/img/doctors/arrow-down.svg' alt="" />
			<div className={cn([cl.linkMenu, 'd-flex', 'flex-column'])}>
				<div className={cn([cl.content, 'd-flex', 'flex-column'])}>
					<div className={cn([cl.contentAdditionalLinks, 'd-flex', 'flex-column'])}>
						{optionsList.map(({ id, text }) => (
							<div onClick={() => selectHandler(id)} key={id}>
								<span>{text}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
