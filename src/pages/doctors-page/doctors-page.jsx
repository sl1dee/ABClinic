import React, { useMemo } from 'react'

import About from '@components/about'
import DoctorsContainer from '@components/doctors-container'

import MainLayout from '../../layout/main/index.js'

const DoctorsPage = () => {
	return (
		<MainLayout>
			<DoctorsContainer />
			<About />
		</MainLayout>
	)
}

export default DoctorsPage
