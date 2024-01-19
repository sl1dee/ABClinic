import React from 'react'

import About from '@components/about'
import Articles from '@components/articles'
import EmployeesSlider from '@components/employees-slider'
import Favorites from '@components/favorites/index.js'
import MainSlider from '@components/main-slider'
import OurWorks from '@components/our-works'
import ReviewsSlider from '@components/reviews-slider'
import Services from '@components/services'
import YandexMap from '@components/yandex-map'

import MainLayout from '../../layout/main'

const MainPage = () => {
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

	return (
		<MainLayout>
			<MainSlider />
			<Services preHeader />
			<Favorites favorites={favorites} />
			<EmployeesSlider sliderHeaderText="Заботливые профессионалы клиники" isViewAll />
			{/* <OurWorks /> */}
			{/* <ReviewsSlider /> */}
			{/* <Articles /> */}
			<About />
			<YandexMap />
		</MainLayout>
	)
}
export default MainPage
