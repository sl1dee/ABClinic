import cn from 'classnames'
import React, { useState } from 'react'

import cl from './cookie.module.scss'

const Cookie = () => {
	const [accept, setAccept] = useState(false)

	return (
		<div className={cn([cl.cookie, `${accept === true ? ' d-none' : ''}`])}>
			{/* <div className={`${cl.cookie}${accept === true ? ' d-none' : ''}`}> */}
			<div className="container d-flex justify-content-between align-items-center">
				<span className={cl.cookieText}>Мы используем cookies</span>
				<button className={cl.cookieButton} onClick={() => setAccept(!accept)}>
					Хорошо
				</button>
			</div>
		</div>
	)
}

export default Cookie
