import React from 'react'

import Articles from '@components/articles/index.js'
import EmployeesSlider from '@components/employees-slider/index.js'
import Favorites from '@components/favorites/index.js'
import HeroScreen from '@components/hero-screen/index.js'
import SignUp from '@components/sign-up/index.js'

import ChildServicesCard from '../services/services-card/child-services-card.jsx'
import cl from './children-referral-container.module.scss'

const ChildrenReferralContainer = () => {
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
		image1: '/media/favorites/three.jpg',
		image2: '/media/favorites/four.jpg'
	}
	return (
		<div className={cl.childrenContainer}>
			<HeroScreen
				title="Детская стоматология"
				text="В нашей стоматологии дети улыбаются без боли и страха"
				img="/media/childrenReferral/children.jpg"
			/>
			<Favorites favorites={favorites} />
			<div className="bg-abclinic">
				<div className="container">
					<ChildServicesCard title="Что вас беспокоит?" />
				</div>
			</div>
			<EmployeesSlider sliderHeaderText="Заботливые профессионалы клиники" isViewAll />
			{/* <Articles /> */}
			<SignUp />
		</div>
	)
}

export default ChildrenReferralContainer
