import Diagnostics from '@components/diagnostics'
import EmployeesSlider from '@components/employees-slider'
import Favorites from '@components/favorites'
import HeroScreen from '@components/hero-screen'
import SignUp from '@components/sign-up'
import { TreatmentTypes } from '@components/treatment-types/index.js'

import cl from './therapy-services-container.module.scss'

const TherapyServicesContainer = () => {
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
		<div className={cl.servicesContainer}>
			<HeroScreen
				title="Лечение зубов"
				text="Ваша улыбка — наша забота, профессиональное и комфортное лечение зубов"
				img="/media/therapyService/dental-treatment.jpg"
			/>
			<TreatmentTypes preHeader />
			{/* <OurWorks /> */}
			<Diagnostics />
			<Favorites favorites={favorites} />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" />
			{/* <PricesForTherapy /> */}
			<SignUp />
		</div>
	)
}

export default TherapyServicesContainer
