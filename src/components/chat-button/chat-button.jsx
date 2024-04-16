import call from '@media/chatButton/call.svg'
import chat from '@media/chatButton/chat.svg'
import close from '@media/chatButton/close.svg'
import modal from '@media/chatButton/modal.svg'
import open from '@media/chatButton/open.svg'
import telegram from '@media/chatButton/telegram.svg'
import whatsapp from '@media/chatButton/whatsapp.svg'
import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import cl from './chat-button.module.scss'

const ChatButton = () => {
	const [isOpen, setIsOpen] = useState(false)

	const dispatch = useDispatch()

	const openModalHandler = () => {
		dispatch(setSignUpIsOpen(true))
	}

	return (
		<div className={cn([cl.chat, 'd-flex', 'justify-content-end'])}>
			<div className={cn([cl.chatWrapper, 'd-flex', 'align-items-center', 'justify-content-center'])}>
				{isOpen ? (
					<div className={cn([cl.group, 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center'])}>
						<div className={cn([cl.groupImages, 'd-flex', 'justify-content-center'])} onClick={openModalHandler}>
							<img src={modal} alt="" />
						</div>
						<Link
							className={cn([cl.groupImages, 'd-flex', 'justify-content-center'])}
							to="tel:+73472000424"
							title="Наш номер телефона"
						>
							<img src={call} alt="" />
						</Link>
						<div className={cn([cl.groupImages, 'd-flex', 'justify-content-center'])}>
							<img src={chat} alt="" />
						</div>
						<Link className={cn([cl.groupImages, 'd-flex', 'justify-content-center'])} to="/" target="_blank">
							<img src={telegram} alt="" />
						</Link>
						<div className="d-flex flex-column align-items-center">
							<Link className={cn([cl.groupImages, 'd-flex', 'justify-content-center'])} to="/" target="_blank">
								<img src={whatsapp} alt="" />
							</Link>
							<div
								className={cn([cl.groupLast, 'd-flex', 'justify-content-center'])}
								onClick={() => setIsOpen(!isOpen)}
							>
								<img src={close} alt="" />
							</div>
						</div>
					</div>
				) : (
					<div className={cn([cl.group, 'd-flex', 'flex-column'])}>
						<div className={cl.groupLast} onClick={() => setIsOpen(!isOpen)}>
							<img src={open} alt="" />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ChatButton
