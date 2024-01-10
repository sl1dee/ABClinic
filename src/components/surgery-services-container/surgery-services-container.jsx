import Diagnostics from '@components/diagnostics'
import Favorites from '@components/favorites'
import HeroScreen from '@components/hero-screen'
import PricesForSurgery from '@components/prices-for-services/prices-for-surgery/index.js'
import SignUp from '@components/sign-up'
import { SurgeryTypes } from '@components/treatment-types'

import cl from './surgery-services-container.module.scss'

const SurgeryServicesContainer = () => {
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
				title="Хирургия"
				text="Доверьте заботу о своей улыбке опытным хирургам-стоматологам"
				img="/media/surgeryService/surgery.jpg"
			/>
			<SurgeryTypes preHeader />
			{/* <OurWorks /> */}
			<Diagnostics />
			<Favorites favorites={favorites} />
			<PricesForSurgery />
			<SignUp />
		</div>
	)
}

export default SurgeryServicesContainer
