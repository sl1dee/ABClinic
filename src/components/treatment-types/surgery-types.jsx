import React from 'react'

import Tabs from '@components/services/tabs'
import { GnathologyTreatmentCard, WisdomTreatmentCard } from '@components/treatment-types/treatment-types-card/index.js'

const SurgeryTypes = ({ preHeader }) => {
	const tabs = [
		{
			id: 0,
			text: 'Челюстно-лицевая хирургия',
			component: <WisdomTreatmentCard />
		},
		{
			id: 1,
			text: 'Гнатология',
			component: <GnathologyTreatmentCard />
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

export default SurgeryTypes
