import cn from 'classnames'
import React, { useMemo } from 'react'

import cl from './blog.module.scss'

const Blog = () => {
	const blogList = useMemo(
		() => [
			{
				id: 0,
				img: '/media/blog/aligners.svg',
				date: '11.11.23',
				title: 'Элайнеры – исправление прикуса без брекетов',
				information: 'Взрослым'
			},
			{
				id: 1,
				img: '/media/blog/toothbrushes.svg',
				date: '11.11.23',
				title: 'Как выбрать зубную щётку и пасту?',
				information: 'Взрослым'
			},
			{
				id: 2,
				img: '/media/blog/adultTeeth.svg',
				date: '11.11.23',
				title: 'Пародонтит: профилактика и лечение',
				information: 'Взрослым'
			},
			{
				id: 3,
				img: '/media/blog/teethСleaning.svg',
				date: '11.11.23',
				title: 'Как научить ребёнка чистить зубы?',
				information: 'Детям'
			},
			{
				id: 4,
				img: '/media/blog/babyTeeth.svg',
				date: '11.11.23',
				title: 'Как ухаживать за молочными зубами?',
				information: 'Детям'
			},
			{
				id: 5,
				img: '/media/blog/dentalExamination.svg',
				date: '11.11.23',
				title: 'Как подготовить ребёнка к посещению стоматолога?',
				information: 'Детям'
			},
			{
				id: 6,
				img: '/media/blog/teethСleaning.svg',
				date: '11.11.23',
				title: 'Как научить ребёнка чистить зубы?',
				information: 'Детям'
			},
			{
				id: 7,
				img: '/media/blog/babyTeeth.svg',
				date: '11.11.23',
				title: 'Как ухаживать за молочными зубами?',
				information: 'Детям'
			},
			{
				id: 8,
				img: '/media/blog/dentalExamination.svg',
				date: '11.11.23',
				title: 'Как подготовить ребёнка к посещению стоматолога?',
				information: 'Детям'
			}
		],
		[]
	)

	return (
		<div className={cl.blogContainer}>
			<div className="container">
				<h1>Блог</h1>
				<div className={cl.blogCards}>
					{blogList.map(({ id, img, date, title, information }) => (
						<div key={id} className={cn([cl.employeesSlider, cl.employeesSliderSlide])}>
							<div className={cl.photo}>
								<img src={img} alt="" />
							</div>
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
