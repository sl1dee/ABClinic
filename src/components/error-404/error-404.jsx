import four from '@media/error404/4.png'
import teeth from '@media/error404/teeth.png'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './error-404.module.scss'

const Error404 = () => {
	return (
		<section className={cl.error}>
			<div
				className={cn([
					cl.errorContent,
					'container',
					'd-flex',
					'flex-column-reverse',
					'flex-lg-row',
					'justify-content-between'
				])}
			>
				<div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-center'])}>
					<h1 className={cn([cl.title, 'd-flex', 'justify-content-center', 'justify-content-lg-start'])}>
						Страница не найдена
					</h1>
					<div className={cn([cl.description, 'd-flex', 'flex-column', 'align-items-center', 'align-items-lg-start'])}>
						<p className="mb-0">Похоже, у нас нет этой страницы.</p>
						<p className="mb-0">Зато у нас есть много других интересных страниц :)</p>
					</div>
					<div className="d-flex justify-content-center justify-content-lg-start">
						<Link to="/" className={cl.link}>
							Вернуться на главную
						</Link>
					</div>
				</div>
				<div
					className={cn([
						cl.images,
						'd-flex',
						'align-items-center',
						'justify-content-center',
						'justify-content-lg-start'
					])}
				>
					<img src={four} alt="" className={cl.four} />
					<img src={teeth} alt="" className={cl.teeth} />
					<img src={four} alt="" className={cl.four} />
				</div>
			</div>
		</section>
	)
}

export default Error404
