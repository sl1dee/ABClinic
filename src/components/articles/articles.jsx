import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import cl from './articles.module.scss'

export default function Articles() {
	return (
		<section className={cl.articles}>
			<div className="container d-flex flex-column">
				<div className="d-flex align-items-center justify-content-between">
					<h2 className={cn([cl.articlesHeader, 'mb-0'])}>Полезныe статьи</h2>
					<Link to="/article">
						<div className={cn([cl.btn, 'd-none', 'd-md-block'])}>Все статьи</div>
					</Link>
				</div>
				<div className={cl.articlesContent}>
					<div
						className={cn([
							cl.articlesContentEl,
							'd-flex',
							'd-md-none',
							'd-lg-flex',
							'flex-column',
							'flex-md-row-reverse',
							'flex-lg-column',
							'justify-content-between',
							'justify-content-md-end',
							'justify-content-lg-between'
						])}
					>
						<Link to="/article">
							<div className={cl.photo}>
								<img src="/media/articles/3.jpg" alt="" />
							</div>
						</Link>
						<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.textDate, 'mb-0'])}>11.11.23</p>
							<p className={cn([cl.textHeader, 'mb-0'])}>Как научить ребенка чистить зубы?</p>
						</div>
					</div>
					<div
						className={cn([
							cl.articlesContentEl,
							'd-flex',
							'flex-column',
							'flex-md-row-reverse',
							'flex-lg-column',
							'justify-content-between',
							'justify-content-md-end',
							'justify-content-lg-between'
						])}
					>
						<Link to="/article">
							<div className={cl.photo}>
								<img src="/media/articles/1.jpg" alt="" />
							</div>
						</Link>
						<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.textDate, 'mb-0'])}>11.11.23</p>
							<p className={cn([cl.textHeader, 'mb-0'])}>Как научить ребенка чистить зубы?</p>
						</div>
					</div>
					<div
						className={cn([
							cl.articlesContentEl,
							'd-flex',
							'flex-column',
							'flex-md-row-reverse',
							'flex-lg-column',
							'justify-content-between',
							'justify-content-md-end',
							'justify-content-lg-between'
						])}
					>
						<div className={cl.photo}>
							<img src="/media/articles/2.jpg" alt="" />
						</div>
						<div className={cn([cl.text, 'd-flex', 'flex-column'])}>
							<p className={cn([cl.textDate, 'mb-0'])}>11.11.23</p>
							<p className={cn([cl.textHeader, 'mb-0'])}>Как научить ребенка чистить зубы?</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
