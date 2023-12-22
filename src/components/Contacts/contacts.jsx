import React from 'react'

import About from '@components/About/About.jsx'
import Map from '@components/Yandex-map/yandex-map.jsx'

import cl from './contacts.module.scss'

const Contacts = () => {
	return (
		<div>
			<h1>Контакты</h1>
			<Map />
			<About />
		</div>
	)
}

export default Contacts
