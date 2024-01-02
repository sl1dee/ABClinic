import useDisableScroll from '@hooks/use-disable-scroll.js'
import { setSignUpIsOpen } from '@store/modules/modals.js'
import cn from 'classnames'
import React, { createRef, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'

import Button from '@ui/button/index.js'

import cl from './sign-up-modal.module.scss'

const SignUpModal = () => {
	const dispatch = useDispatch()
	useDisableScroll()

	const [isWasClosed, setIsWasClosed] = useState(false)

	const closeHandler = () => {
		setIsWasClosed(true)

		setTimeout(() => dispatch(setSignUpIsOpen(false)), 300)
	}

	const form = createRef()

	const [isOk, setIsOk] = useState(2)

	function submitForm(e) {
		e.preventDefault()
		const fd = new FormData(form.current)
		fd.append('type', `Задать вопрос`)
		fd.append('url', `${document.location.pathname}`)

		fetch('/api/zayavka', { method: 'post', body: fd })
			.then((resp) => resp.json())
			.then((res) => {
				if (res.status === 'ok') {
					setIsOk(1)
				} else {
					setIsOk(0)
				}
			})
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

							<form
								className="d-flex flex-column"
								ref={form}
								onSubmit={(e) => {
									submitForm(e)
								}}
							>
								<div className={cn([cl.askBlockFields, 'd-flex', 'flex-column'])}>
									<div className="d-flex flex-column">
										<input name="name" placeholder="Имя" type="text" required="" />
									</div>
									<div className="d-flex flex-column">
										<InputMask mask="+7 999 999-99-99" name="phone" size="16" placeholder="Телефон" required />
									</div>
								</div>
								<div className="d-flex flex-column">
									<Button className={cl.btn}>Отправить</Button>
									<p className={cl.textCenter}>
										Нажимая на кнопку, вы соглашаетесь <br /> с{' '}
										<a href="/policy" target="_blank">
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

export default SignUpModal
