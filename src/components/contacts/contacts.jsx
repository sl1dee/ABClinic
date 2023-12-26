import React from 'react'

import About from '@components/about'
import YandexMap from '@components/yandex-map'

import cl from './contacts.module.scss'

const Contacts = () => {
	return (
		<div className={cl.contactsWrapper}>
			<div className="container">
				<h1 className={cl.title}>Контакты</h1>
				<YandexMap />
				<About />
			</div>
		</div>
	)
}

export default Contacts
