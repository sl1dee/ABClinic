import useDisableScroll from '@hooks/use-disable-scroll.js'
import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, { useRef, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'

import getRawPhoneFromParsedPhone from '@helpers/getRawPhoneFromParsedPhone.js'
import parseRawPhone from '@helpers/parseRawPhone.js'

import Button from '@ui/button/index.js'

import cl from './sign-up-modal.module.scss'

export default function SignUpModal() {
	const [isOk, setIsOk] = useState(2)
	const [isWasClosed, setIsWasClosed] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const [viewPhone, setViewPhone] = useState('')
	const [phone, setPhone] = useState('')

	const dispatch = useDispatch()

	useDisableScroll()

	const closeHandler = () => {
		setIsWasClosed(true)

		setTimeout(() => dispatch(setSignUpIsOpen(false)), 200)
	}

	const submitForm = (e) => {
		e.preventDefault()

		setIsDisabled(true)

		const fd = new FormData(e.target)

		const fdPhone = fd.get('phone')

		if (fdPhone.slice(0, 1) === '8') {
			fd.set('phone', `+7${fdPhone.slice(1)}`)
		}

		if (
			fd
				.get('phone')
				.split(/[-_()^\s*$]+/)
				.join('').length === 12
		) {
			fetch('/api/handler_request', { method: 'post', body: fd })
				.then((resp) => resp.json())
				.then((res) => {
					if (res.status === 'ok') {
						setIsOk(1)
					} else {
						setIsOk(0)
					}
				})
				.finally(() => {
					setIsDisabled(false)
				})
		} else {
			setIsDisabled(false)
			alert('Заполните номер телефона')
		}
	}
	const changePhoneHandler = (event) => {
		const rawPhone = getRawPhoneFromParsedPhone(event.target.value, viewPhone)
		const newViewPhone = parseRawPhone(rawPhone)

		setViewPhone(newViewPhone)
		setPhone(rawPhone)
	}

	return (
		<div className={cn([cl.ask, 'justify-content-center', 'align-items-center'])}>
			<div className={cl.askOverlay} onClick={closeHandler} title="Закрыть" />
			<div className={cn([cl.askBlock, { [cl.askBlockClosed]: isWasClosed }, 'd-flex'])}>
				<div className={cn([cl.askBlockText, 'd-flex', 'flex-column'])}>
					<div className={cl.askBlockClose} onClick={closeHandler} />
					{isOk === 1 ? (
						<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.request, 'mb-0'])}>Спасибо!</p>
							<span className={cn([cl.request2, 'mb-0'])}>Скоро мы с вами свяжемся.</span>
						</div>
					) : isOk === 2 ? (
						<>
							<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
								<p className={cn([cl.request, 'mb-0'])}>Запись на прием</p>
								<p className={cn([cl.request2, 'mb-0'])}>
									Мы рады предложить вам нашу помощь в решении любых вопросов и проблем. Заполните форму обратного
									звонка, и наши специалисты свяжутся с вами.
								</p>
							</div>

							<form className="d-flex flex-column" onSubmit={submitForm}>
								<div className={cn([cl.askBlockFields, 'd-flex', 'flex-column'])}>
									<div className="d-flex flex-column">
										<input name="name" placeholder="Имя" type="text" disabled={isDisabled} />
									</div>
									<div className="d-flex flex-column">
										<input
											onChange={changePhoneHandler}
											value={viewPhone}
											type="text"
											size="16"
											placeholder="Телефон"
											required
											disabled={isDisabled}
										/>
										<input name="phone" type="hidden" tabIndex={-1} readOnly value={phone} />
									</div>
								</div>
								<div className="d-flex flex-column">
									<input type="submit" value="Отправить" className={cl.btn} disabled={isDisabled} />
									<p className={cl.textCenter}>
										Нажимая на кнопку, вы соглашаетесь
										<br />с{' '}
										<a href="/privacy-policy" target="_blank">
											Политикой конфиденциальности
										</a>
									</p>
								</div>
							</form>
						</>
					) : (
						<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.request, 'mb-0'])}>Ошибка!</p>
							<span className={cn([cl.request2, 'mb-0'])}>Произошла ошибка, попробуйте снова позже.</span>
						</div>
					)}
				</div>
				<div
					className={cn([cl.askBlockImage, 'd-none', 'd-md-block', 'w-100'])}
					style={{ backgroundImage: 'url("/media/makeRecord/one.jpg")' }}
				/>
			</div>
		</div>
	)
}
