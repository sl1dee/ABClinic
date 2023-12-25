import cn from 'classnames'
import React, { useMemo } from 'react'

import cl from './doctors-container.module.scss'

const DoctorsContainer = () => {
	const doctorsList = useMemo(
		() => [
			{
				id: 0,
				img: '/media/employeesSlider/aliya.svg',
				name: 'Алия Беглова',
				qualification: 'Врач-ортодонт',
				information: 'Взрослый врач'
			},
			{
				id: 1,
				img: '/media/employeesSlider/nasima.svg',
				name: 'Насима Шагаева',
				qualification: 'Врач-стоматолог-ортопед',
				information: 'Взрослый врач'
			},
			{
				id: 2,
				img: '/media/employeesSlider/eliza.svg',
				name: 'Элиза Мигранова',
				qualification: 'Врач-стоматолог-терапевт',
				information: 'Взрослый врач'
			},
			{
				id: 3,
				img: '/media/employeesSlider/almaz.svg',
				name: 'Алмаз Гафурьянов',
				qualification: 'Врач-гигиенист',
				information: 'Взрослый врач'
			},
			{
				id: 4,
				img: '/media/employeesSlider/adel.svg',
				name: 'Адель Ахметова',
				qualification: 'Врач-стоматолог-ортодонт',
				information: 'Взрослый и детский врач'
			},
			{
				id: 5,
				img: '/media/employeesSlider/timur.svg',
				name: 'Тимур Ишмухаметов',
				qualification: 'Стоматолог общей практики',
				information: 'Взрослый врач'
			},
			{
				id: 6,
				img: '/media/employeesSlider/ilgiz.svg',
				name: 'Ильгиз Каримов',
				qualification: 'Врач-стоматолог-терапевт',
				information: 'Взрослый врач'
			},
			{
				id: 7,
				img: '/media/employeesSlider/aliya.svg',
				name: 'Сединкин Евгений',
				qualification: 'Врач-стоматолог-ортопед',
				information: 'Взрослый врач'
			},
			{
				id: 8,
				img: '/media/employeesSlider/alena.svg',
				name: 'Взрослый врач',
				qualification: 'Главная медсестра'
				// information: 'Взрослый и детский врач'
			},
			{
				id: 9,
				img: '/media/employeesSlider/elvira.svg',
				name: 'Эльвира Яхина',
				qualification: 'Администратор'
				// information: 'Взрослый и детский врач'
			}
		],
		[]
	)

	return (
		<div className={cl.doctorsСontainer}>
			<div className="container">
				<h1>Врачи</h1>
				<div>фильтры</div>
				{doctorsList.map(({ id, img, name, qualification, information }) => (
					<div key={id} className={cn([cl.employeesSlider, cl.employeesSliderSlide])}>
						<div className="photo">
							{/* <img src="/media/employeesSlider/aliya-beglova.jpg" alt="" /> */}
							<img src={img} alt="" />
						</div>
						{/* <div className="info d-flex flex-column justify-content-between"> */}
						<div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
							{/* <div className="info-text d-flex flex-column"> */}
							<div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
								<p className={cn([cl.infoTextName, 'mb-0'])}>{name}</p>
								<p className={cn([cl.infoTextPosition, 'mb-0'])}>{qualification}</p>
							</div>
							<div className={cn([cl.infoBadge])}>
								<p className="mb-0">{information}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default DoctorsContainer
