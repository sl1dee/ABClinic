import React, { useMemo } from 'react'
import { toggleMakeRecordModal } from '../../store/actions/makeRecordModal/makeRecordModal.js'


const Stock = () => {

	const stockList = useMemo(
		() => [
			{
				id: 0,
				title: 'Бесплатное обследование ',
				text: 'Бесплатное обследование для всех новых пациентов',
				img: '/assets/img/stock/firstBanner.svg'
				// className: cl.whatsapp
			},
			{
				id: 1,
				title: 'Выгоднее вместе',
				text: 'Скидка 10% на семейные пакеты услуг',
				img: '/assets/img/stock/secondBanner.svg'
				// className: cl.telegram
			},
			{
				id: 2,
				title: 'Улучши свою улыбку с нами',
				text: 'Бесплатный осмотр и консультация ортодонта для новых пациентов',
				img: '/assets/img/stock/thirdBanner.svg'
				// className: cl.instagram
			}
		],
		[]
	)

	return (
		<div className='stock'>
			<div className='container'>
				<h1 className='stockHeader'>Акции</h1>
				{ stockList.map(({ id, title, text, img, className }) => (
					<div key={ id } className='d-flex flex-column flex-md-row stockContent'>
						<div className='stockImg'><img src={ img } alt='' /></div>
						<div className='d-flex flex-column stockBlock'>
							<h3 className='stockTitle'>{ title }</h3>
							<div className='stockText'>{ text }</div>
							<div className='d-flex btnWrap'>
								<div
									className='btn btn-dark-trnsp flex-grow-1 flex-md-grow-0'
									onClick={ () => dispatch(toggleMakeRecordModal(true)) }
								>Записаться
								</div>
							</div>
						</div>
					</div>
				)) }
			</div>
		</div>

	)
}

export default Stock