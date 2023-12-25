import cn from 'classnames'
import React, { useMemo } from 'react'

import Button from '@ui/button/index.js'

// import { toggleMakeRecordModal } from '../../store/actions/makeRecordModal/makeRecordModal.js'
import cl from './stock.module.scss'

const Stock = () => {
	const stockList = useMemo(
		() => [
			{
				id: 0,
				title: 'Бесплатное обследование ',
				text: 'Бесплатное обследование для всех новых пациентов',
				// img: '/assets/img/stock/firstBanner.svg',
				stockImg: cl.firstBanner
			},
			{
				id: 1,
				title: 'Выгоднее вместе',
				text: 'Скидка 10% на семейные пакеты услуг',
				// img: '/assets/img/stock/secondBanner.svg',
				stockImg: cl.secondBanner
			},
			{
				id: 2,
				title: 'Улучши свою улыбку с нами',
				text: 'Бесплатный осмотр и консультация ортодонта для новых пациентов',
				// img: '/assets/img/stock/thirdBanner.svg',
				stockImg: cl.thirdBanner
			}
		],
		[]
	)

	return (
		<div className={cl.stock}>
			<div className="container">
				<h1 className={cl.stockHeader}>Акции</h1>
				{stockList.map(({ id, title, text, img, stockImg }) => (
					<div key={id} className={cn([cl.stockContent, 'd-flex', 'flex-column', 'flex-sm-row'])}>
						<div className={stockImg} />
						<div className={cn([cl.stockBlock, 'd-flex', 'flex-column'])}>
							<h3 className={cl.stockTitle}>{title}</h3>
							<div className={cl.stockText}>{text}</div>
							<div className="d-flex btnWrap">
								<Button>Записаться</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Stock
