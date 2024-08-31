import TreatmentTypesCard from '@components/treatment-types/treatment-types-card/treatment-types-card.jsx'

import cl from './treatment-types-card.module.scss'

const PeriodontitisTreatmentCard = () => {
	return (
		<TreatmentTypesCard
			title="Признаки периодонтита"
			description="Периодонтит характеризуется разрушением костной ткани и чревато выпадением зуба. Важно принять меры как можно скорее, так как промедление с лечением может привести к более серьёзным проблемам со здоровьем полости рта."
			cards={[
				{
					id: 0,
					title: 'Отек мягких тканей',
					text: 'Возникает, если в них попадает воспаленная жидкость из пораженного очага'
				},
				{
					id: 1,
					title: 'Появление отверстия',
					text: 'Появляется на десне недалеко от пораженного корня зуба'
				},
				{
					id: 2,
					title: 'Сильная боль',
					text: 'Болезненные ощущения терпимые, ноющие, после переходят в острые и пульсирующие'
				}
			]}
		/>
	)
}

export default PeriodontitisTreatmentCard
