import TreatmentTypesCard from '@components/treatment-types/treatment-types-card/treatment-types-card.jsx'

const WisdomTreatmentCard = () => {
	return (
		<TreatmentTypesCard
			title="Что такое челюстно-лицевая хирургия?"
			description="Это область медицины, занимающаяся диагностикой, лечением и профилактикой заболеваний, травм лица, челюсти, рта и шеи, включающая операции на зубах, костях лицевого скелета, мягких тканях и органах полости рта. В каких случаях необходимо обратиться к хирургу?"
			cards={[
				{
					id: 0,
					title: 'Зубы мудрости',
					text: 'Если зуб сильно разрушен, зуб не прорезался полностью, растет под углом или горизонтально, вредит другим зубам, есть воспаление десны, щек или языка '
				},
				{
					id: 1,
					title: 'Травмы',
					text: 'Переломы верхней и нижней челюстей, орбит, скуловых костей, скулоорбитального комплекса, а также при повреждении мягких тканей лица'
				},
				{
					id: 2,
					title: 'Врожденные и приобретенные патологии',
					text: 'Аномалии развития лицевого черепа, предушные свищи, деформации верхней и нижней челюстей'
				}
			]}
		/>
	)
}

export default WisdomTreatmentCard
