import logo from '@assets/img/logos/logo_b_hor.svg'
import loc from '@assets/img/sidebar/loc.svg'
import phone from '@assets/img/sidebar/phone.svg'
import useDisableScroll from '@hooks/use-disable-scroll.js'
import { setBurgerIsOpen, setSignUpIsOpen } from '@store/modules/modals.js'
import Button from '@ui/button/index.js'
import cn from 'classnames'
import React, { memo, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import cl from './sidebar.module.scss'

const Sidebar = () => {
	const dispatch = useDispatch()
	useDisableScroll()
	useEffect(()=> {
		return () => {
			dispatch(setBurgerIsOpen(false))
		}
	},[])
	// const closeHandler = () => {
	// 	dispatch(setBurgerIsOpen(false))
	// }
	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}
	const [isWasClosed, setIsWasClosed] = useState(false)

	const closeHandler = () => {
		setIsWasClosed(true)

		setTimeout(() => dispatch(setBurgerIsOpen(false)), 310)
	}

	const navigationList = useMemo(
		() => [
			{
				id: 0,
				href: '/',
				header: 'Услуги',
				links: [
					{
						id: 0,
						href: '/therapy-service',
						text: 'Лечение зубов'
					},
					{
						id: 1,
						href: '/orthopedics-services',
						text: 'Ортопедия'
					},
					{
						id: 2,
						href: '/surgery-services',
						text: 'Хирургия'
					},
					{
						id: 3,
						href: '/orthodontics-services',
						text: 'Брекеты, элайнеры'
					},
					{
						id: 4,
						href: '/periodontics-services',
						text: 'Лечение дёсен'
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
						href: '/adult-referral',
						text: 'Взрослое'
					},
					{
						id: 1,
						href: '/children-referral',
						text: 'Детское'
					}
				]
			},

			{
				id: 2,
				href: '/doctors',
				header: 'Врачи'
			},
			{
				id: 1,
				href: '/',
				header: 'О клинике',
				links: [
					{
						id: 0,
						href: '/contacts',
						text: 'Контакты'
					}
					// {
					// 	id: 1,
					// 	href: '/stock',
					// 	text: 'Акции'
					// }
					// {
					// 	id: 2,
					// 	href: '/blog',
					// 	text: 'Блог'
					// }
				]
			}
		],
		[]
	)


	return (
		<div className={cl.sidebar}>
			<div className={cl.sidebarBckg} onClick={closeHandler} title="Закрыть" />
			<div className={cn([cl.sidebarContent,{ [cl.sidebarContentClosed]: isWasClosed },'d-flex', 'flex-column', 'justify-content-md-between', 'h-100'])}>
				<div
					className={cn([cl.closer, 'd-flex', 'align-items-center', 'justify-content-center'])}
					onClick={closeHandler}
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
							{links?.map(({ id, text, href }) => (
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
						<Button onClick={openModalHandler} colorStyle="outlined" className={cl.btn}> Записаться </Button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default memo(Sidebar)
