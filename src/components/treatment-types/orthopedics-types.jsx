import React from 'react'

import Tabs from '@components/services/tabs'
import {
	CrownsTreatmentCard,
	ProstheticsTreatmentCard,
	VeneersTreatmentCard
} from '@components/treatment-types/treatment-types-card/index.js'

const OrthopedicsTypes = ({ preHeader }) => {
	const tabs = [
		{
			id: 0,
			text: 'Виниры',
			component: <VeneersTreatmentCard />
		},
		{
			id: 1,
			text: 'Коронки',
			component: <CrownsTreatmentCard />
		},
		{
			id: 2,
			text: 'Протезирование',
			component: <ProstheticsTreatmentCard />
		}
	]
	return (
		<section className="services">
			<div className="container d-flex flex-column">
				{preHeader && (
					<div className="services-preHeader">
						<p className="mb-0">Виды лечения</p>
					</div>
				)}
				<Tabs tabs={tabs} />
			</div>
		</section>
	)
}

export default OrthopedicsTypes
