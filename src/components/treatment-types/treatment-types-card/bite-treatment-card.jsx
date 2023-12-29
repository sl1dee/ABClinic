import TreatmentTypesCard from '@components/treatment-types/treatment-types-card/treatment-types-card.jsx'

const BiteTreatmentCard = () => {
	return (
		<TreatmentTypesCard
			title="Зачем устанавливать брекеты?"
			description="Брекет-система необходима для устранения патологий, которые связаны с неправильным положением зубов. Главная цель брекетов не только эстетическая привлекательность улыбки. Неправильный прикус и положение зубов могут привести к серьезным проблемам со здоровьем."
			cards={[
				{
					id: 0,
					title: 'Неправильный прикус',
					text: 'Неправильное смыкание зубных рядов нижней и верхней челюсти — проблема не только эстетического характера, она может негативно влиять и на органы ЖКТ и привести к серьёзной асимметрии лица'
				},
				{
					id: 1,
					title: 'Скученность зубов',
					text: 'Когда во рту не хватает места, зубы искривляются и меняют своё естественное положение, что может привести к пародонтиту, кариесу, воспалениям и травмам'
				},
				{
					id: 2,
					title: 'Щели между зубами',
					text: 'Широкие щели между соседними зубами — распространённая проблема, которая в основном эстетической, но может привести к нарушению дикции, развитию кариеса и пульпита'
				}
			]}
		/>
	)
}

export default BiteTreatmentCard
