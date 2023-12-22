import logo from '@assets/img/logos/logo_w.svg'
import cn from 'classnames'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import cl from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<div className="container d-flex flex-column">
				<div
					className={cn([
						cl.footerContent,
						'w-100',
						'd-flex',
						'flex-column',
						'flex-md-row',
						'align-items-start',
						'justify-content-between'
					])}
				>
					<div className={cl.footerLogo}>
						<img src={logo} alt="" />
					</div>
					<div className={cn([cl.footerContacts, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.footerContactsEl, 'd-flex', 'flex-column'])}>
							<div>
								<p className={cn([cl.label, 'mb-0'])}>Свяжитесь с нами</p>
							</div>
							<div>
								<a href="tel:+79171234567">
									<p className={cn([cl.contact, 'mb-0'])}>+7 917 123 45 67</p>
								</a>
							</div>
						</div>
						<div className={cn([cl.footerContactsEl, 'd-flex', 'flex-column'])}>
							<div>
								<p className={cn([cl.label, 'mb-0'])}>Адрес клиники</p>
							</div>
							<div>
								<p className={cn([cl.contact, 'mb-0'])}>Уфа, ул. Академика Королева, 24</p>
							</div>
						</div>
						<div className="d-flex">
							<Button className={cl.btn} colorStyle="secondary">
								Записаться на прием
							</Button>
						</div>
					</div>
					<div className={cn([cl.footerLinks, 'd-flex', 'flex-column'])}>
						<div>
							<Link to="/">
								<p className="mb-0">Услуги</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Взрослое направление</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Детское направление</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Врачи</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Наши работы</p>
							</Link>
						</div>
						<div className="d-block d-lg-none">
							<Link to="/">
								<p className="mb-0">Акции</p>
							</Link>
						</div>
						<div className="d-block d-lg-none">
							<Link to="/">
								<p className="mb-0">Блог</p>
							</Link>
						</div>
						<div className="d-block d-lg-none">
							<Link to="/">
								<p className="mb-0">О компании</p>
							</Link>
						</div>
						<div className="d-block d-lg-none">
							<Link to="/">
								<p className="mb-0">Контакты</p>
							</Link>
						</div>
						<div className="d-block d-lg-none">
							<Link to="/">
								<p className="mb-0">Отзывы</p>
							</Link>
						</div>
					</div>
					<div className={cn([cl.footerLinks, 'd-none', 'd-lg-flex', 'flex-column'])}>
						<div>
							<Link to="/">
								<p className="mb-0">Акции</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Блог</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">О компании</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Контакты</p>
							</Link>
						</div>
						<div>
							<Link to="/">
								<p className="mb-0">Отзывы</p>
							</Link>
						</div>
					</div>
				</div>
				<div
					className={cn([
						cl.footerBottom,
						'd-flex',
						'flex-column',
						'flex-column',
						'flex-md-row',
						'align-items-start',
						'align-items-md-center',
						'justify-content-between'
					])}
				>
					<div>
						<Link to="/">
							<div>
								<p className={cn([cl.footerBottomLink, 'mb-0'])}>Правовая информация</p>
							</div>
						</Link>
					</div>
					<div>
						<a href="https://ambity.ru">
							<div>
								<p className={cn([cl.footerBottomLink, 'mb-0'])}>Дизайн и разработка сайта: Амбити</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default memo(Footer)
