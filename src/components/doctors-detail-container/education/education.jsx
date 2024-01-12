import { useGetDoctorQuery } from '@store/modules/doctors-api.js'
import cn from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'

import cl from './education.module.scss'

const Education = () => {
	const { id: doctorId } = useParams()
	const { data: doctorsList = [] } = useGetDoctorQuery(doctorId)

	return (
		<div className={cl.eduactionContainer}>
			<div className="container">
				<div className={cl.title}>Образование</div>
				<div className={cl.block}>
					<ul className={cl.blockPoints}>
						{doctorsList[0]?.education.split('\r\n').map(education => <li className={cl.point}>
							{education}
						</li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Education
