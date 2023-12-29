import TreatmentTypesCard from '@components/treatment-types/treatment-types-card/treatment-types-card.jsx'

const LastTreatmentCard = () => {
	return (
		<TreatmentTypesCard
			title="Признаки пародонтита"
			description="Пародонтит — это серьёзное заболевание, которое может привести к обильному зубному налёту, плохому запаху изо рта, опухшим и кровоточивым дёснам, боли во время приёма пищи и ежедневной чистке зубов, оголению зубных корней и подвижности зубов"
			cards={[
				{
					id: 0,
					title: 'Кровоточивость дёсен',
					text: 'Воспаление десен вызывает слабость и хрупкость сосудов, из за чего дёсна кровоточат,  в результате чего образуются зубодесневые каналы, разрушаются корни и кость'
				},
				{
					id: 1,
					title: 'Подвижность зубов',
					text: 'Если зубы подвижны в любые стороны, это служит одним из основных проявлений воспаления дёсен, что может привести к болезненным ощущениям во время приёма пищи и гигиены'
				},
				{
					id: 2,
					title: 'Оголение корней зуба',
					text: 'Оголение корней зуба возникает при неправильной гигиене, что приводит к повышенной чувствительности и болезненным ощущениям даже при приёме пищи'
				}
			]}
		/>
	)
}

export default LastTreatmentCard
