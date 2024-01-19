import React from 'react'

import Articles from '@components/articles'
import EmployeesSlider from '@components/employees-slider'
import Favorites from '@components/favorites'
import HeroScreen from '@components/hero-screen'
import { ServicesCard } from '@components/services/services-card/index.js'
import SignUp from '@components/sign-up'

import cl from './adult-referral-container.module.scss'

const favorites = {
	header: 'Ваша улыбка в надежных руках',
	items: [
		{
			header: 'План лечения на первой консультации',
			description: 'Индивидуальный и грамотный план лечения с ценами после первой консультации',
			photo: '/media/favorites/layout-list.svg'
		},
		{
			header: 'Честные рекомендации и лечение',
			description: 'У наших врачей нет планов продаж, весь процесс нацелен только на здоровье пациента',
			photo: '/media/favorites/heart.svg'
		},
		{
			header: 'Основываемся на доказательной медицине',
			description:
				'Применяем только проверенные и эффективные методы лечения и объясняем информацию на доступном языке',
			photo: '/media/favorites/book-check.svg'
		},
		{
			header: 'Все специалисты в одном месте',
			description:
				'Вам не надо ездить в разные части города. В нашей клинике есть рентген, операционная, стационар и всё оборудование - новое',
			photo: '/media/favorites/microscope-w.svg',
			dark: true
		}
	],
	image1: '/media/favorites/two.jpg',
	image2: '/media/favorites/one.jpg'
}

const AdultReferralContainer = () => {
	return (
		<div className={cl.adultContainer}>
			<HeroScreen
				title="Стоматология для взрослых"
				text="Поможем вам сохранить здоровье ваших зубов и дёсен"
				img="/media/adultReferral/dentistry-for-adults.jpg"
			/>
			<Favorites favorites={favorites} />
			<div className="bg-abclinic">
				<div className="container">
					<ServicesCard title="Что вас беспокоит?" />
				</div>
			</div>
			<EmployeesSlider sliderHeaderText="Заботливые профессионалы клиники" isViewAll />
			{/* <Articles /> */}
			<SignUp />
		</div>
	)
}

export default AdultReferralContainer
