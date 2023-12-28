import React from 'react'

import Tabs from '@components/services/tabs'
import {
	CariesTreatmentCard,
	PeriodontitisTreatmentCard,
	PulpitisTreatmentCard
} from '@components/treatment-types/treatment-types-card'

const TreatmentTypes = ({ preHeader }) => {
	const tabs = [
		{
			id: 0,
			text: 'Кариес',
			component: <CariesTreatmentCard />
		},
		{
			id: 1,
			text: 'Пульпит',
			component: <PulpitisTreatmentCard />
		},
		{
			id: 2,
			text: 'Парадонтит',
			component: <PeriodontitisTreatmentCard />
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

export default TreatmentTypes
