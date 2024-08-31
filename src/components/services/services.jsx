import React from 'react'

import { ChildServicesCard, ServicesCard } from '@components/services/services-card'
import Tabs from '@components/services/tabs'

const Services = ({ preHeader }) => {
	const tabs = [
		{
			id: 0,
			text: 'Для взрослых',
			component: <ServicesCard />
		},
		{
			id: 1,
			text: 'Для детей',
			component: <ChildServicesCard />
		}
	]

	return (
		<section className="services">
			<div className="container d-flex flex-column">
				{preHeader && (
					<div className="services-preHeader">
						<p className="mb-0">Выберите направление услуг</p>
					</div>
				)}
				<Tabs tabs={tabs} />
			</div>
		</section>
	)
}

export default Services
