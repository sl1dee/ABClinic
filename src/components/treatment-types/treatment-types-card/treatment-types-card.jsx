import cl from './treatment-types-card.module.scss'

const TreatmentTypesCard = ({ title, description, cards }) => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.titleWrapper}>
				<h2 className={cl.title}>{title}</h2>
				<p className={cl.description}>{description}</p>
			</div>
			<ul className={cl.cardsWrapper}>
				{cards.map(({ id, title: cardTitle, text }) => (
					<li key={id} className={cl.card}>
						<h3 className={cl.cardTitle}>{cardTitle}</h3>
						<p className={cl.cardText}>{text}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TreatmentTypesCard
