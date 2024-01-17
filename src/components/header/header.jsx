import arrDown from '@assets/img/header/arr_down.svg'
import logo from '@assets/img/logos/logo_b_hor.svg'
import { setBurgerIsOpen, setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import cl from './header.module.scss'

const Header = () => {
	const dispatch = useDispatch()
	const [isScrolled, setIsScrolled] = useState(false)

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}
	const openBurgerHandler = () => {
		dispatch(setBurgerIsOpen(true))
	}

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		setIsScrolled(scrollTop > 0)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className={`${cl.header} ${isScrolled ? cl.scrolled : ''}`}>
			<div className="container d-flex align-items-center justify-content-between">
				<div className={cl.headerLogo}>
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className={cn([cl.headerLinks, 'd-none', 'd-md-flex', 'align-items-center'])}>
					<div className={cn([cl.link, 'd-flex', 'align-items-center'])}>
						<Link to="/doctors">
							<span className="mb-0">Врачи</span>
						</Link>
					</div>
					<div className={cn([cl.link, 'd-flex', 'align-items-center'])}>
						<span className="mb-0">Услуги</span>
						<img src={arrDown} alt="" />
						<div className={cn([cl.linkMenu, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.content, 'd-flex', 'flex-column'])}>
								<div className={cl.contentBigLink}>
									<span>Услуги</span>
								</div>
								<div className={cn([cl.contentAdditionalLinks, 'd-flex', 'flex-column'])}>
									<div>
										<Link to="/therapy-service">
											<span>Лечение зубов</span>
										</Link>
									</div>
									<Link to="/orthopedics-services">
										<div>
											<span>Ортопедия</span>
										</div>
									</Link>
									<div>
										<Link to="/surgery-services">
											<span>Хирургия</span>
										</Link>
									</div>
									<div>
										<Link to="/orthodontics-services">
											<span>Брекеты, элайнеры</span>
										</Link>
									</div>
									<div>
										<Link to="/periodontics-services">
											<span>Лечение десен</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={cn([cl.link, 'd-flex', 'align-items-center'])}>
						<span className="mb-0">Направления</span>
						<img src={arrDown} alt="" />
						<div className={cn([cl.linkMenu, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.content, 'd-flex', 'flex-column'])}>
								<div className={cl.contentBigLink}>
									<span>Направления</span>
								</div>
								<div className={cn([cl.contentAdditionalLinks, 'd-flex', 'flex-column'])}>
									<div>
										<Link to="/adult-referral">
											<span>Взрослое</span>
										</Link>
									</div>
									<div>
										<Link to="/children-referral">
											<span>Детское</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={cn([cl.link, 'd-none', 'd-xxl-flex', 'align-items-center'])}>
						<span className="mb-0">О клинике</span>
						<img src={arrDown} alt="" />
						<div className={cn([cl.linkMenu, 'd-flex', 'flex-column'])}>
							<div className={cn([cl.content, 'd-flex', 'flex-column'])}>
								<div className={cl.contentBigLink}>
									<span>О клинике</span>
								</div>
								<div className={cn([cl.contentAdditionalLinks, 'd-flex', 'flex-column'])}>
									<div>
										<Link to="/contacts">
											<span>Контакты</span>
										</Link>
									</div>
									{/* <div> */}
									{/*	<Link to="/stock"> */}
									{/*		<span>Акции</span> */}
									{/*	</Link> */}
									{/* </div> */}
									{/* <div> */}
									{/*	<Link to="/blog"> */}
									{/*		<span>Блог</span> */}
									{/*	</Link> */}
									{/* </div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={cn([cl.headerAdditional, 'd-flex', 'align-items-center'])}>
					<div className={cn([cl.contacts, 'd-flex', 'align-items-center'])}>
						<a href="tel:+73472000424" className={cn([cl.contactsPhone, 'd-none', 'd-xxl-flex'])}>
							<div>
								<span>+7 347 200 04 24</span>
							</div>
						</a>
						<Button
							onClick={openModalHandler}
							sizeStyle="SizeS"
							colorStyle="outlined"
							className="d-none d-lg-flex justify-content-center"
						>
							Записаться
						</Button>
					</div>
					<div
						className={cn([
							cl.sidenavTrigger,
							'd-flex',
							'flex-column',
							'align-items-center',
							'justify-content-between',
							'd-xxl-none'
						])}
						onClick={openBurgerHandler}
					>
						<div />
					</div>
				</div>
			</div>
		</header>
	)
}

export default memo(Header)
