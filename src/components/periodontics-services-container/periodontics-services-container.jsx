import { useGetServicesQuery } from '@store/modules/services-api.js'

import Diagnostics from '@components/diagnostics/index.js'
import EmployeesSlider from '@components/employees-slider/index.js'
import Favorites from '@components/favorites/index.js'
import HeroScreen from '@components/hero-screen/index.js'
import PricesForPeriodontics from '@components/prices-for-services/prices-for-periodontics/index.js'
import SignUp from '@components/sign-up/index.js'
import { PeriodonticsTypes } from '@components/treatment-types/index.js'

import cl from './periodontics-services-container.module.scss'

const PeriodonticsServicesContainer = () => {
	const {
		data: { services: servicesList } = { services: [] }
	} = useGetServicesQuery()

	const currentServiceId = servicesList.find(({ name }) => name === 'Лечение десен')?.id

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
				title="Пародонтология"
				text="Наука о здоровье дёсен и профилактике заболеваний пародонта"
				img="/media/periodonticsServices/periodontics.jpg"
			/>
			<PeriodonticsTypes preHeader />
			{/* <OurWorks /> */}
			<Diagnostics />
			<Favorites favorites={favorites} />
			<EmployeesSlider sliderHeaderText="Врачи по направлению" serviceId={currentServiceId} />
			<PricesForPeriodontics />
			<SignUp />
		</div>
	)
}

export default PeriodonticsServicesContainer
