import React, { createRef, useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'

import { toggleMakeRecordModal } from '../../../store/actions/makeRecordModal/makeRecordModal'

export default function MakeRecord(props) {
	const isOpen = useSelector((state) => state.makeRecordModal)
	const dispatch = useDispatch()

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
		<div className={`ask ${isOpen ? 'active justify-content-center align-items-center' : ''}`}>
			<div
				className="ask-overlay"
				onClick={() => {
					dispatch(toggleMakeRecordModal(false))
				}}
				title="Закрыть"
			/>
			<div className="ask-block d-flex">
				{/* <div className="ask-block-close" onClick={()=>{dispatch(toggleMakeRecordModal(false))}}/> */}
				<div className="ask-block-text d-flex flex-column">
					{isOk === 1 ? (
						<div className="text d-flex flex-column">
							<p className="request mb-0">Спасибо!</p>
							<span className="request2 mb-0">Скоро мы с вами свяжемся.</span>
						</div>
					) : isOk === 2 ? (
						<>
							<div className="text d-flex flex-column">
								<p className="request mb-0">Запись на прием</p>
								<p className="request2 mb-0">
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
								<div className="ask-block-fields ask-block-fields-buy d-flex flex-column">
									<div className="d-flex flex-column">
										<input name="name" placeholder="Имя" type="text" required="" />
									</div>
									<div className="d-flex flex-column">
										<InputMask mask="+7 999 999-99-99" name="phone" size="16" placeholder="Телефон" required />
									</div>
								</div>
								<div className="d-flex flex-column">
									<button className="btn btn-dark-trnsp">Отправить</button>
									<p className="text-center">
										Нажимая на кнопку, вы соглашаетесь с{' '}
										<a href="/policy" target="_blank">
											Политикой конфиденциальности
										</a>
									</p>
								</div>
							</form>
						</>
					) : (
						<div className="text d-flex flex-column">
							<p className="request mb-0">Ошибка!</p>
							<span className="request2 mb-0">Произошла ошибка, попробуйте снова позже.</span>
						</div>
					)}
				</div>
				<div
					className="ask-block-image d-none d-md-block w-100"
					style={{ backgroundImage: 'url("/media/makeRecord/one.jpg")' }}
				/>
			</div>
		</div>
	)
}
