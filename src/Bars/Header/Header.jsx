import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { toggleMakeRecordModal } from '../../store/actions/makeRecordModal/makeRecordModal'


export default function Header() {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
	const dispatch = useDispatch()

	const toggle = (val) => {
		setSidebarIsOpen(val)
		document.body.style.overflow = val ? 'hidden' : null
	}

	return <>
		<header className='header'>
			<div className='container d-flex align-items-center justify-content-between'>
				<div className='header-logo'>
					<img src='/assets/img/logos/logo_b_hor.svg' alt='' />
				</div>
				<div className='d-none d-md-flex align-items-center header-links'>
					<div className='link d-flex align-items-center'><span className='mb-0'>Врачи</span></div>
					<div className='link d-flex align-items-center'>
						<span className='mb-0'>Услуги</span><img src='/assets/img/header/arr_down.svg' alt='' />
						<div className='link-menu d-flex flex-column'>
							<div className='content d-flex flex-column'>
								<div className='content-bigLink'>
									<span>Услуги</span>
								</div>
								<div className='content-additionalLinks d-flex flex-column'>
									<div><span>Лечение зубов</span></div>
									<div><span>Имплантация</span></div>
									<div><span>Хирургия</span></div>
									<div><span>Брекеты, элайнеры</span></div>
									<div><span>Лечение десен</span></div>
									<div><span>Профессиональная гигиена</span></div>
								</div>
							</div>
						</div>
					</div>
					<div className='link d-flex align-items-center'>
						<span className='mb-0'>Направления</span><img src='/assets/img/header/arr_down.svg' alt='' />
						<div className='link-menu d-flex flex-column'>
							<div className='content d-flex flex-column'>
								<div className='content-bigLink'>
									<span>Направления</span>
								</div>
								<div className='content-additionalLinks d-flex flex-column'>
									<div><span>Взрослое</span></div>
									<div><span>Детское</span></div>
								</div>
							</div>
						</div>
					</div>
					<div className='link d-none d-xxl-flex align-items-center'>
						<span className='mb-0'>О клинике</span><img src='/assets/img/header/arr_down.svg' alt='' />
						<div className='link-menu d-flex flex-column'>
							<div className='content d-flex flex-column'>
								<div className='content-bigLink'>
									<span>О клинике</span>
								</div>
								<div className='content-additionalLinks d-flex flex-column'>
									<div><span>Контакты</span></div>
									<div><span>Акции</span></div>
									<div><span>Блог</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='header-additional d-flex align-items-center'>
					<div className='contacts d-flex align-items-center'>
						<a href='tel:+79171234567' className='contacts-phone d-none d-xxl-flex'>
							<div>
								<span>+7 917 123 45 67</span>
							</div>
						</a>
						<div
							className='btn btn-trnsp-dark d-none d-lg-flex justify-content-center'
							onClick={ () => dispatch(toggleMakeRecordModal(true)) }
						>
							<span>Записаться</span>
						</div>
					</div>
					<div
						className='sidenavTrigger d-flex flex-column align-items-center justify-content-between d-xxl-none'
						onClick={ () => toggle(true) }
					>
						<div />
					</div>
				</div>
			</div>
		</header>

		<Sidebar isOpen={ sidebarIsOpen } toggle={ toggle } />
	</>
}