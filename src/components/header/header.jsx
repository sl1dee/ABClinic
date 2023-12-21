// import { toggleMakeRecordModal } from '@store/actions/makeRecordModal/makeRecordModal.js'
// import { useDispatch } from 'react-redux'
import arrDown from '@assets/img/header/arr_down.svg'
import logo from '@assets/img/logos/logo_b_hor.svg'
import cn from 'classnames'
import React, { useState } from 'react'

import Button from '@ui/button/index.js'

import cl from './header.module.scss'
import Sidebar from './sidebar'

export default function Header() {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
	// const dispatch = useDispatch()

	const toggle = (val) => {
		setSidebarIsOpen(val)
		document.body.style.overflow = val ? 'hidden' : null
	}

	return (
		<>
			<header className={cl.header}>
				<div className="container d-flex align-items-center justify-content-between">
					<div className={cl.headerLogo}>
						<img src={logo} alt="" />
					</div>
					<div className={cn([cl.headerLinks, 'd-none', 'd-md-flex', 'align-items-center'])}>
						<div className={cn([cl.link, 'd-flex', 'align-items-center'])}>
							<span className="mb-0">Врачи</span>
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
											<span>Лечение зубов</span>
										</div>
										<div>
											<span>Имплантация</span>
										</div>
										<div>
											<span>Хирургия</span>
										</div>
										<div>
											<span>Брекеты, элайнеры</span>
										</div>
										<div>
											<span>Лечение десен</span>
										</div>
										<div>
											<span>Профессиональная гигиена</span>
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
											<span>Взрослое</span>
										</div>
										<div>
											<span>Детское</span>
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
											<span>Контакты</span>
										</div>
										<div>
											<span>Акции</span>
										</div>
										<div>
											<span>Блог</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={cn([cl.headerAdditional, 'd-flex', 'align-items-center'])}>
						<div className={cn([cl.contacts, 'd-flex', 'align-items-center'])}>
							<a href="tel:+79171234567" className={cn([cl.contactsPhone, 'd-none', 'd-xxl-flex'])}>
								<div>
									<span>+7 917 123 45 67</span>
								</div>
							</a>
							<Button sizeStyle="SizeS" colorStyle="outlined" className="d-none d-lg-flex justify-content-center">
								Записаться
							</Button>
							{/* <div */}
							{/*	className="btn btn-trnsp-dark d-none d-lg-flex justify-content-center" */}
							{/*	// onClick={() => dispatch(toggleMakeRecordModal(true))} */}
							{/*	// компонент кнопки */}
							{/* > */}
							{/*	<span>Записаться</span> */}
							{/* </div> */}
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
							onClick={() => toggle(true)}
						>
							<div />
						</div>
					</div>
				</div>
			</header>
			{/* <Sidebar isOpen={sidebarIsOpen} toggle={toggle} /> */}
		</>
	)
}
