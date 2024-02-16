import React from 'react'

import cl from './education.module.scss'

const Education = (props) => {
	// const { id: doctorId } = useParams()
	// const { data: doctorsList = [] } = useGetDoctorQuery(doctorId)

	return (
		<div className={cl.eduactionContainer}>
			<div className="container">
				<h1 className={cl.title}>Образование</h1>
				<div className={cl.block}>
					<ul className={cl.blockPoints}>
						{props.education.map((education) => (
							<li className={cl.point}>{education}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Education
