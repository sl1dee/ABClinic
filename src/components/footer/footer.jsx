import cn from 'classnames'
import { Link } from 'react-router-dom'

import Button from '@ui/button'

import cl from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={cl.footerWrapper}>
			<div className="container">
				<div className={cn(['d-flex', cl.contentWrapper])}>
					<Link to="/" className={cl.logo} />
					<div>
						<div>
							<span>Свяжитесь с нами</span>
							<Link to="/">+7 917 123 45 67</Link>
						</div>
						<div>
							<span>Адрес клиники</span>
							<span>Уфа, ул. Академика Королева, 24</span>
						</div>
						<Button sizeStyle="sizeM" colorStyle="secondary">
							Записаться на прием
						</Button>
					</div>
					<nav className={cn(['d-flex', cl.navList])}>
						<ul>
							<li>Услуги</li>
							<li>Взрослое направление</li>
							<li>Детское направление</li>
							<li>Врачи</li>
							<li>Наши работы</li>
						</ul>
						<ul>
							<li>Акции</li>
							<li>Блог</li>
							<li>О компании</li>
							<li>Контакты</li>
							<li>Отзывы</li>
						</ul>
					</nav>
				</div>
				<div className="d-flex justify-content-between">
					<Link className={cl.copyright} to="/">
						Правовая информация
					</Link>
					<Link className={cl.copyright} to="/">
						Дизайн и разработка сайта: Амбити
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
