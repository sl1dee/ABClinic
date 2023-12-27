import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

import cl from './employees-slider-card.module.scss'

const EmployeesSliderCard = () => {
	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	const doctorsList = useMemo(
		() => [
			{
				id: 0,
				img: '/media/employeesSlider/aliya.jpg',
				name: 'Алия Беглова',
				qualification: 'Врач-ортодонт',
				information: 'Взрослый врач'
			},
			{
				id: 1,
				img: '/media/employeesSlider/nasima.jpg',
				name: 'Насима Шагаева',
				qualification: 'Врач-стоматолог-ортопед',
				information: 'Взрослый врач'
			},
			{
				id: 2,
				img: '/media/employeesSlider/eliza.jpg',
				name: 'Элиза Мигранова',
				qualification: 'Врач-стоматолог-терапевт',
				information: 'Взрослый врач'
			},
			{
				id: 3,
				img: '/media/employeesSlider/almaz.jpg',
				name: 'Алмаз Гафурьянов',
				qualification: 'Врач-гигиенист',
				information: 'Взрослый врач'
			},
			{
				id: 4,
				img: '/media/employeesSlider/adel.jpg',
				name: 'Адель Ахметова',
				qualification: 'Врач-стоматолог-ортодонт',
				information: 'Взрослый и детский врач'
			},
			{
				id: 5,
				img: '/media/employeesSlider/timur.jpg',
				name: 'Тимур Ишмухаметов',
				qualification: 'Стоматолог общей практики',
				information: 'Взрослый врач'
			},
			{
				id: 6,
				img: '/media/employeesSlider/ilgiz.jpg',
				name: 'Ильгиз Каримов',
				qualification: 'Врач-стоматолог-терапевт',
				information: 'Взрослый врач'
			},
			{
				id: 7,
				img: '/media/employeesSlider/aliya.jpg',
				name: 'Сединкин Евгений',
				qualification: 'Врач-стоматолог-ортопед',
				information: 'Взрослый врач'
			},
			{
				id: 8,
				img: '/media/employeesSlider/alena.jpg',
				name: 'Взрослый врач',
				qualification: 'Главная медсестра',
				information: 'Главная медсестра'
			},
			{
				id: 9,
				img: '/media/employeesSlider/elvira.jpg',
				name: 'Эльвира Яхина',
				qualification: 'Администратор',
				information: 'Администратор'
			}
		],
		[]
	)

	return (
		<>
			{doctorsList.map(({ id, img, name, qualification, information }) => (
				<div key={id}>
					<div className={cl.photo}>
						<img src={img} alt="" />
					</div>
					<div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
						<div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.infoTextName, 'mb-0'])}>{name}</p>
							<p className={cn([cl.infoTextPosition, 'mb-0'])}>{qualification}</p>
						</div>
						<div className={cl.infoBadge}>
							<p className="mb-0">{information}</p>
						</div>
						<Button
							onClick={openModalHandler}
							className={cn([cl.btn, 'd-block', 'd-xs-block', 'd-sm-block', 'd-md-block', 'd-lg-none'])}
						>
							Записаться
						</Button>
					</div>
				</div>
			))}
		</>
	)
}

export default EmployeesSliderCard
