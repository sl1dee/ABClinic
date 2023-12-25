import cn from 'classnames'
import React from 'react'

import cl from './education.module.scss'

const Education = () => {
	return (
		<div className={cl.eduactionContainer}>
			<div className="container">
				<div className={cl.title}>Образование</div>
				<div className={cl.block}>
					<ul className={cl.blockPoints}>
						<li className={cl.point}>
							Московский государственный медико-стоматологический университет имени А.И. Евдокимова, специальность
							«Стоматология», 2019 год.
						</li>
						<li className={cl.point}>
							Интернатура, Московский государственный медико-стоматологический университет имени А.И. Евдокимова,
							специализация «Детская стоматология», 2020 год.
						</li>
						<li className={cl.point}>
							Повышение квалификации: Современные методы лечения и профилактики в детской стоматологии, 2021 год.
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Education
