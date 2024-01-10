import cn from 'classnames'
import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import getRawPhoneFromParsedPhone from '@helpers/getRawPhoneFromParsedPhone.js'
import parseRawPhone from '@helpers/parseRawPhone.js'

import Button from '@ui/button/button.jsx'

import cl from './sign-up.module.scss'

const SignUp = () => {
	const [isOk, setIsOk] = useState(2)
	const [isDisabled, setIsDisabled] = useState(false)
	const [viewPhone, setViewPhone] = useState('')
	const [phone, setPhone] = useState('')

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
		<div className={cl.signUpContainer}>
			<div className="container">
				<div className={cn([cl.signUpBlock, 'd-flex', 'flex-column', 'flex-sm-row'])}>
					<div className={cl.signUpInformation}>
						{isOk === 1 ? (
							<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
								<p className={cn([cl.request, 'mb-0'])}>Спасибо!</p>
								<span className={cn([cl.request2, 'mb-0'])}>Скоро мы с вами свяжемся.</span>
							</div>
						) : isOk === 2 ? (
							<>
								<div className={cn([cl.signUpText, 'mb-0'])}>Жду вас у себя на приёме!</div>
								{/* <div className={cn([cl.text, 'd-flex', 'flex-column'])}> */}
								<h1 className={cn([cl.signUpTitle, 'mb-0'])}>Записаться на приём</h1>

								{/* </div> */}

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
										<div className="d-flex flex-column">
											<input type="submit" value="Отправить" className={cl.btn} disabled={isDisabled} />
										</div>
									</div>
									<div className={cl.bckgIcon} />
								</form>
							</>
						) : (
							<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
								<p className={cn([cl.request, 'mb-0'])}>Ошибка!</p>
								<span className={cn([cl.request2, 'mb-0'])}>Произошла ошибка, попробуйте снова позже.</span>
							</div>
						)}
					</div>

					<div className={cl.signUpImage} />
				</div>
			</div>
		</div>
	)
}

export default SignUp
