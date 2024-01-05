import cn from 'classnames'

import cl from './treatment-types-card.module.scss'

const TreatmentTypesCard = ({ title, description, cards }) => {
	return (
		<div className={cl.wrapper}>
			<div className={cn([cl.titleWrapper, 'd-flex', 'flex-column', 'flex-lg-row'])}>
				<h2 className={cl.title}>{title}</h2>
				<p className={cl.description}>{description}</p>
			</div>
			{/* <div className={cn([cl.cardsWrapper, 'd-flex', 'flex-column', 'flex-lg-row'])}> */}
			<div className={cn([cl.cardsWrapper, 'd-grid'])}>
				{cards.map(({ id, title: cardTitle, text }) => (
					<div key={id} className={cl.card}>
						<h3 className={cl.cardTitle}>{cardTitle}</h3>
						<p className={cl.cardText}>{text}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default TreatmentTypesCard
