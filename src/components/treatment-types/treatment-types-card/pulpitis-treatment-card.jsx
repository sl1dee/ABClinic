import TreatmentTypesCard from '@components/treatment-types/treatment-types-card/treatment-types-card.jsx'

const PulpitisTreatmentCard = () => {
	return (
		<TreatmentTypesCard
			title="Признаки пульпита"
			description="Серьезнейшее и опаснейшее осложнение при кариозном поражении зубов. Важно принять меры как можно скорее, так как промедление с лечением может привести к более серьёзным проблемам со здоровьем полости рта."
			cards={[
				{
					id: 0,
					title: 'Гиперчувствительность',
					text: 'Появление болезненных ощущений при взаимодействии с горячий, холодным, кислым и сладким'
				},
				{
					id: 1,
					title: 'Потемнение эмали',
					text: 'При поражении пульпы эмаль становится более матовой, заметно темнеет'
				},
				{
					id: 2,
					title: 'Сильная боль',
					text: 'Боль распространяется по всей челюсти и отдает в голову, ухо, шею и усиливается ночью'
				}
			]}
		/>
	)
}

export default PulpitisTreatmentCard
