import twogis from '@media/qualityDepartment/2gis.svg'
import absoluteStars from '@media/qualityDepartment/absoluteStars.png'
import hands from '@media/qualityDepartment/hands.jpg'
import stars from '@media/qualityDepartment/stars.svg'
import yandex from '@media/qualityDepartment/yandex.svg'
import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@ui/button/index.js'

import cl from './quality-department.module.scss'

const QualityDepartment = () => {
	return (
		<div className={cl.quality}>
			<div className={cn([cl.qualityWrapper, 'container', 'd-flex', 'flex-column'])}>
				<div
					className={cn([
						cl.qualityWrapperBlock1,
						'd-flex',
						'flex-column',
						'flex-md-row',
						'align-items-center',
						'justify-content-center'
					])}
				>
					<img src={hands} alt="" />
					<div className={cn([cl.qualityWrapperBlock1Content, 'd-flex', 'flex-column'])}>
						<div className={cl.qualityWrapperBlock1ContentTitle}>Нам действительно важно ваше мнение!</div>
						<div className={cl.qualityWrapperBlock1ContentDescription}>
							Свяжитесь с отделом контроля качества, если у вас возникли вопросы, замечание или есть мнение по улучшению
							нашей клиники. <br />
							Мы обрабатываем каждую заявку лично и очень внимательно.
						</div>
						<Button colorStyle="primary" className={cl.btn}>
							Написать в отдел качества
						</Button>
					</div>
				</div>
				<div className={cn([cl.qualityWrapperBlock2, 'd-flex', 'align-items-center', 'justify-content-center'])}>
					<div
						className={cn([
							cl.qualityWrapperBlock2Content,
							'd-flex',
							'flex-column',
							'flex-lg-row',
							'justify-content-between'
						])}
					>
						<div className={cn([cl.qualityWrapperBlock2ContentLeft, 'd-flex', 'flex-column'])}>
							<div className={cl.question}>Понравилось обслуживание?</div>
							<div className={cl.description}>
								Оставьте отзыв в Яндекс Картах или 2ГИС и получите набор со средствами гигиены от Доктор Слон
							</div>
							<img src={stars} alt="" />
						</div>
						<div
							className={cn([
								cl.qualityWrapperBlock2ContentRight,
								'd-flex',
								'flex-column',
								'flex-md-row',
								'flex-lg-column'
							])}
						>
							<Link to="https://yandex.ru/maps/-/CDRt5JOc" target="_blank">
								<div className={cn([cl.card, 'd-flex', 'justify-content-center', 'align-items-center'])}>
									<img src={yandex} alt="" />
								</div>
							</Link>
							<Link to="https://go.2gis.com/v5v8w" target="_blank">
								<div className={cn([cl.card, 'd-flex', 'justify-content-center', 'align-items-center'])}>
									<img src={twogis} alt="" />
								</div>
							</Link>
						</div>
						<img src={absoluteStars} alt="" className={cl.absoluteStars} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default QualityDepartment
