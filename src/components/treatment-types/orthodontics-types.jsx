import React from 'react'

import Tabs from '@components/services/tabs/index.js'
import { AlignersTreatmentCard, BiteTreatmentCard } from '@components/treatment-types/treatment-types-card/index.js'

const OrthodonticsTypes = ({ preHeader }) => {
	const tabs = [
		{
			id: 0,
			text: 'Брекеты',
			component: <BiteTreatmentCard />
		},
		{
			id: 1,
			text: 'Элайнеры',
			component: <AlignersTreatmentCard />
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

export default OrthodonticsTypes
