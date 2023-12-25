import React from 'react'

import About from '@components/about/about.jsx'
import Map from '@components/yandex-map/yandex-map.jsx'

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
