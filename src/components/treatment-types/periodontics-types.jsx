import React from 'react'

import Tabs from '@components/services/tabs/index.js'
import { GwynithTreatmentCard, LastTreatmentCard } from '@components/treatment-types/treatment-types-card/index.js'

const PeriodonticsTypes = ({ preHeader }) => {
	const tabs = [
		{
			id: 0,
			text: 'Пародонтит',
			component: <LastTreatmentCard />
		},
		{
			id: 1,
			text: 'Гингивит',
			component: <GwynithTreatmentCard />
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

export default PeriodonticsTypes
