import React, { useState } from 'react'
import { CookieConsent } from 'react-cookie-consent'

const Cookie = () => {
	const [accept, setAccept] = useState(false)

	return (
		// <div className={cn([cl.cookie, `${accept === true ? ' d-none' : ''}`])}>
		// 	{/* <div className={`${cl.cookie}${accept === true ? ' d-none' : ''}`}> */}
		// 	<div className="container d-flex justify-content-between align-items-center">
		// 		<span className={cl.cookieText}>Мы используем cookies</span>
		// 		<button className={cl.cookieButton} onClick={() => setAccept(!accept)}>
		// 			Хорошо
		// 		</button>
		// 	</div>
		// </div>

		<CookieConsent
			location="bottom"
			buttonText="Хорошо"
			cookieName="myAwesomeCookieName2"
			style={{ background: '#2B373B' }}
			buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
			expires={150}
		>
			Мы используем cookies {/* <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span> */}
		</CookieConsent>
	)
}

export default Cookie
