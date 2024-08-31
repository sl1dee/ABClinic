import adultTeeth from '@media/blog/adultTeeth.jpg'
import aligners from '@media/blog/aligners.jpg'
import babyTeeth from '@media/blog/babyTeeth.jpg'
import babyTeethCleaning from '@media/blog/babyTeethCleaning.jpg'
import dentalExamination from '@media/blog/dentalExamination.jpg'
import toothbrushes from '@media/blog/toothbrushes.jpg'
import cn from 'classnames'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import cl from './blog.module.scss'

const Blog = () => {
	const blogList = useMemo(
		() => [
			{
				id: 1,
				img: aligners,
				date: '11.11.23',
				title: 'Элайнеры – исправление прикуса без брекетов',
				information: 'Взрослым',
				href: '/article'
			},
			{
				id: 2,
				img: toothbrushes,
				date: '11.11.23',
				title: 'Как выбрать зубную щётку и пасту?',
				information: 'Взрослым',
				href: '/article'
			},
			{
				id: 3,
				img: adultTeeth,
				date: '11.11.23',
				title: 'Пародонтит: профилактика и лечение',
				information: 'Взрослым',
				href: '/article'
			},
			{
				id: 4,
				img: babyTeethCleaning,
				date: '11.11.23',
				title: 'Как научить ребёнка чистить зубы?',
				information: 'Детям',
				href: '/article'
			},
			{
				id: 5,
				img: babyTeeth,
				date: '11.11.23',
				title: 'Как ухаживать за молочными зубами?',
				information: 'Детям',
				href: '/article'
			},
			{
				id: 6,
				img: dentalExamination,
				date: '11.11.23',
				title: 'Как подготовить ребёнка к посещению стоматолога?',
				information: 'Детям',
				href: '/article'
			}
			// {
			// 	id: 7,
			// 	img: '/media/blog/babyTeethCleaning.jpg',
			// 	date: '11.11.23',
			// 	title: 'Как научить ребёнка чистить зубы?',
			// 	information: 'Детям',
			// 	href: '/article'
			// },
			// {
			// 	id: 8,
			// 	img: '/media/blog/babyTeeth.jpg',
			// 	date: '11.11.23',
			// 	title: 'Как ухаживать за молочными зубами?',
			// 	information: 'Детям',
			// 	href: '/article'
			// },
			// {
			// 	id: 9,
			// 	img: '/media/blog/dentalExamination.jpg',
			// 	date: '11.11.23',
			// 	title: 'Как подготовить ребёнка к посещению стоматолога?',
			// 	information: 'Детям',
			// 	href: '/article'
			// }
		],
		[]
	)

	return (
		<div className={cl.blogContainer}>
			<div className="container">
				<h1 className={cl.title}>Блог</h1>
				<div className={cl.blogCards}>
					{blogList.map(({ id, img, date, title, information, href }) => (
						<div key={id} className={cn([cl.employeesSlider, cl.employeesSliderSlide])}>
							<Link to={href}>
								<div className={cl.photo}>
									<img src={img} alt="" />
								</div>
							</Link>
							<div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
								<div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
									<p className={cn([cl.infoTextDate, 'mb-0'])}>{date}</p>
									<p className={cn([cl.infoTextTitle, 'mb-0'])}>{title}</p>
									<div className="d-flex">
										<p className={cn([cl.infoTextBadge, 'mb-0'])}>{information}</p>
									</div>
									{/* <p className={cn([cl.infoTextBadge, 'mb-0'])}>{information}</p> */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog
