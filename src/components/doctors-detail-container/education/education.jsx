import cn from 'classnames'
import React from 'react'

import cl from './education.module.scss'

const Education = (props) => {
	// const { id: doctorId } = useParams()
	// const { data: doctorsList = [] } = useGetDoctorQuery(doctorId)

	return (
		<div className={cl.eduactionContainer}>
			<div className="container">
				<div className={cl.title}>Образование</div>
				<div className={cl.block}>
					<ul className={cl.blockPoints}>
						{props.education.map(education => <li className={cl.point}>
							{education}
						</li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Education