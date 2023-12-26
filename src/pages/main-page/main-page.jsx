import React from 'react'

<<<<<<< Updated upstream
import Education from '@components/Doctors-detail-container/education/index.js'
import HeroScreen from '@components/Doctors-detail-container/hero-screen/index.js'
import About from '@components/about/about.jsx'
import Map from '@components/yandex-map/yandex-map.jsx'
import YandexMap from '@components/yandex-map/yandex-map.jsx'
=======
import About from '@components/about'
import Articles from '@components/articles'
import EmployeesSlider from '@components/employees-slider'
import Favorites from '@components/favorites'
import MainSlider from '@components/main-slider'
import OurWorks from '@components/our-works'
import ReviewsSlider from '@components/reviews-slider'
import Services from '@components/services'
import YandexMap from '@components/yandex-map'
>>>>>>> Stashed changes

import Articles from '../../Components/Articles/Articles'
import EmployeesSlider from '../../Components/EmployeesSlider/EmployeesSlider'
import Favorites from '../../Components/Favorites/Favorites'
import MainSlider from '../../Components/MainSlider/MainSlider'
import OurWorks from '../../Components/OurWorks/OurWorks'
import ReviewsSlider from '../../Components/ReviewsSlider/ReviewsSlider'
import Services from '../../Components/Services/Services'
import MainLayout from '../../layout/main'

const MainPage = () => {
	const services = [
		{
			header: 'Для взрослых',
			items: [
				{
					header: 'Лечение зубов',
					description: 'Боль в зубах, кариес, пульпит, переодонтит',
					badge: 'Терапия'
				},
				{
					header: 'Имплантация',
					description: 'Протезирование на имплантатах, коронки, виниры, керамические накладки',
					badge: 'Ортопедия'
				},
				{
					header: 'Удаление зубов',
					description: 'Удаление зубов мудрости, кисты зуба, ретинированного зуба ',
					badge: 'Хирургия'
				},
				{
					header: 'Брекеты, элайнеры',
					description: 'Диагностика, 3D план лечения, установка, наблюдение',
					badge: 'Ортодонтия'
				},
				{
					header: 'Лечение десен',
					description: 'Боль, кровоточивость в деснах, запах изо рта, пародонтит, гингивит, налет и зубной кариес',
					badge: 'Пародонтология'
				},
				{
					header: 'Профессиональная гигиена',
					description: 'Профессиональная чистка, отбеливание, профилактика',
					badge: 'Эстетика'
				}
			]
		},
		{
			header: 'Для детей',
			additionalImage: '/media/services/childs.svg',
			items: [
				{
					header: 'Болит зуб',
					description: 'Боль в зубах, кариес, пульпит, переодонтит',
					badge: 'Терапия'
				},
				{
					header: 'Зубной налет',
					description: 'Профессиональная гигиена и обучение правильному уходу за полостью рта в домашних условиях',
					badge: 'Профгигиена'
				},
				{
					header: 'Протезирование зубов',
					description: 'Коронки на временные зубы, восстановление молочных зубов',
					badge: 'Ортопедия'
				},
				{
					header: 'Исправление прикуса',
					description: 'Правильный прикус с помощью брекетов, элайнеров',
					badge: 'Ортодонтия'
				},
				{
					header: 'Удаление зубов, пластика уздечки',
					description: 'Бережное удаление молочных зубов, пластика уздечки языка и лечение на костной опоре',
					badge: 'Детская хирургия'
				},
				{
					image: '/media/services/1.jpeg'
				}
			]
		}
	]

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
			{/* <MainSlider /> */}
			{/* <Services preHeader="Выберите направление услуг" services={services} /> */}
			{/* <Favorites favorites={favorites} /> */}
			{/* <EmployeesSlider /> */}
			{/* <OurWorks /> */}
			{/* <ReviewsSlider /> */}
			{/* <Articles /> */}
			<HeroScreen />
			<Education />
			<About />
			<YandexMap />
			{/* <yandex-map /> */}
		</MainLayout>
	)
}
export default MainPage
