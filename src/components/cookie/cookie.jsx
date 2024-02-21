import cn from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import cl from './cookie.module.scss'

const Cookie = () => {
	const [accept, setAccept] = useState(getCookie('cookies'))

	function getCookie(name) {
		const matches = document.cookie.match(
			new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`)
		)
		return matches ? decodeURIComponent(matches[1]) : undefined
	}

	function setCookie(name, value, options = {}) {
		options = {
			path: '/',
			...options
		}

		if (options.expires instanceof Date) {
			options.expires = options.expires.toUTCString()
		}

		let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

		for (const optionKey in options) {
			updatedCookie += `; ${optionKey}`
			const optionValue = options[optionKey]
			if (optionValue !== true) {
				updatedCookie += `=${optionValue}`
			}
		}
		document.cookie = updatedCookie

		setAccept(true)
	}

	if (!accept) {
		return (
			// <div className={`${accept === true ? ' d-none' : ''}`}>
			<div className={cn([cl.cookie])}>
				{/* <div className={cn([cl.cookie, `${accept === true ? ' d-none' : ''}`])}> */}
				{/* <div className={`${cl.cookie}${accept === true ? ' d-none' : ''}`}> */}
				<div className="container d-flex justify-content-between align-items-center">
					{/* <span className={cl.cookieText}>Мы используем cookies</span> */}
					<span className={cl.cookiePolicy}>
						На сайте компании ООО "Стоматологический центр Бегловой" используется куки сетевых служб Яндекс и Google.
						Продолжая просмотр сайта Вы выражаете своё согласие с{' '}
						<Link to="/privacy-policy">
							<span>Политикой безопасности хранения и обработки персональных данных</span>
						</Link>{' '}
						компании ООО "Стоматологический центр Бегловой", разработанной в соответствии с требованиями 152-ФЗ РФ.
					</span>
					<Button
						// sizeStyle="SizeS"
						colorStyle="outlined"
						className={cl.cookieButton}
						onClick={() => setCookie('cookies', 'true', { expires: new Date(2070, 1, 20) })}
					>
						Хорошо
					</Button>
				</div>
			</div>
			// </div>
		)
	}
	return <></>
}

export default Cookie
