import React from 'react'
import { toggleMakeRecordModal } from '../../../store/actions/makeRecordModal/makeRecordModal.js'


const DoctorCard = () => {
	return (
		<div className='doctorCardWrapper'>
			<div className='container'>
				<div className='d-flex flex-column flex-md-row'>
					<div className='text d-flex flex-column justify-content-between'>
						<div className='text-content d-flex flex-column'>
							<h2 className='mb-0'>Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
							<p className='mb-0'>
								Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную
								консультацию
							</p>
							<div className='d-flex btnWrap'>
								<div
									className='btn btn-dark-trnsp flex-grow-1 flex-md-grow-0'
									onClick={ () => dispatch(toggleMakeRecordModal(true)) }
								>
									Записаться
								</div>
							</div>
						</div>
						<div className='bckgIcon d-none d-md-block'>
							<img src='/assets/img/mainSlider/union.svg' alt='' />
						</div>
					</div>
					<div className='photo'>
						<img src='/media/mainSlider/1.jpeg' alt='' />
					</div>
				</div>
			</div>

		</div>
	)
}

export default DoctorCard

