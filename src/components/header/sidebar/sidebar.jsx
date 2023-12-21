// import { toggleMakeRecordModal } from '@store/actions/makeRecordModal/makeRecordModal.js'
import logo from '@assets/img/logos/logo_b_hor.svg'
import loc from '@assets/img/sidebar/loc.svg'
import phone from '@assets/img/sidebar/phone.svg'
import cn from 'classnames'
import React, { memo, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import cl from './sidebar.module.scss'

const Sidebar = ({ props }) => {
	// const dispatch = useDispatch()

	const navigationList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				header: 'Услуги',
				links: [
					{
						id: 0,
						href: '/',
						text: 'Лечение зубов'
					},
					{
						id: 1,
						href: '/',
						text: 'Имплантация'
					},
					{
						id: 2,
						href: '/',
						text: 'Хирургия'
					},
					{
						id: 3,
						href: '/',
						text: 'Брекеты, элайнеры'
					},
					{
						id: 4,
						href: '/',
						text: 'Лечение дёсен'
					},
					{
						id: 4,
						href: '/',
						text: 'Профессиональная гигиена'
					}
				]
			},

			{
				id: 1,
				href: '/',
				header: 'Направления',
				links: [
					{
						id: 0,
						href: '/',
						text: 'Взрослое'
					},
					{
						id: 1,
						href: '/',
						text: 'Детское'
					}
				]
			},

			{
				id: 2,
				href: '/',
				header: 'Врачи'
			},
			{
				id: 1,
				href: '/',
				header: 'О клинике',
				links: [
					{
						id: 0,
						href: '/',
						text: 'Контакты'
					},
					{
						id: 1,
						href: '/',
						text: 'Акции'
					},
					{
						id: 2,
						href: '/',
						text: 'Блог'
					}
				]
			}
		],
		[]
	)

	return (
		<div className={cn({ [cl.sidebar]: !props.isOpen, [cl.sidebarOpen]: props.isOpen })}>
			<div className={cl.sidebarBckg} onClick={() => props.toggle(false)} title="Закрыть" />
			<div className={cn([cl.sidebarContent, 'd-flex', 'flex-column', 'justify-content-md-between', 'h-100'])}>
				<div
					className={cn([cl.closer, 'd-flex', 'align-items-center', 'justify-content-center'])}
					onClick={() => props.toggle(false)}
					title="Закрыть"
				/>
				<div className={cn([cl.menu, 'd-flex', 'flex-column'])}>
					<div className={cl.menuLogo}>
						<img src={logo} alt="" />
					</div>
					{navigationList.map(({ id, header, href, links }) => (
						<div key={id} className={cn([cl.menuLinks, 'd-flex', 'flex-column'])}>
							<Link to={href}>
								<div>
									<p className={cn([cl.menuLinks_header, 'mb-0'])}>{header}</p>
								</div>
							</Link>
							{links.map(({ id, text, href }) => (
								<Link key={id} to={href}>
									<div>
										<p className={cn([cl.menuLinks_link, 'mb-0'])}>{text}</p>
									</div>
								</Link>
							))}
						</div>
					))}
					<div className={cn([cl.contacts, 'd-flex', 'flex-column'])}>
						<div className={cn([cl.contactsInfo, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.contactsInfo_link, 'd-flex', 'align-items-center'])}>
								<div>
									<img src={loc} alt="" />
								</div>
								<div>
									<p className="mb-0">Уфа, ул. Академика Королева, 24</p>
								</div>
							</div>
							<a href="tel:+79171234567">
								<div className={cn([cl.contactsInfo_link, 'd-flex', 'align-items-center'])}>
									<div>
										<img src={phone} alt="" />
									</div>
									<div>
										<p className="mb-0">+7 917 123-45-67</p>
									</div>
								</div>
							</a>
							<div className={cl.contactsInfo_time}>
								<p className="mb-0">Открыто с 10:00 до 21:00</p>
							</div>
						</div>
						{/* <div */}
						{/*	className={cn([cl.btn, 'btn-trnsp-dark'])} */}
						{/*	onClick={() => { */}
						{/*		// dispatch(toggleMakeRecordModal(true)) */}
						{/*		// props.toggle(false) */}
						{/*		// Это кнопка компонент */}
						{/*	}} */}
						{/* > */}
						{/*	Записаться */}
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
export default memo(Sidebar)
