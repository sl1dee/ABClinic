import Diagnostics from '@components/diagnostics/index.js'
import Favorites from '@components/favorites/index.js'
import HeroScreen from '@components/hero-screen/index.js'
import OurWorks from '@components/our-works/index.js'
import SignUp from '@components/sign-up/index.js'
import { OrthodonticsTypes } from '@components/treatment-types/index.js'

const OrthodonticsServicesContainer = () => {
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
		<>
			<HeroScreen
				title="Ортодонтия: брекеты и элайнеры"
				text="Важный шаг на пути к идеальной улыбке и здоровью зубов"
				img="/media/orthodonticsService/orthodontics.jpg"
			/>
			<OrthodonticsTypes preHeader />
			<OurWorks />
			<Diagnostics />
			<Favorites favorites={favorites} />
			<SignUp />
		</>
	)
}

export default OrthodonticsServicesContainer
