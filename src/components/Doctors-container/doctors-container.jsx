import React from 'react'


const DoctorsContainer = () => {
	return (
		<div className='doctorsСontainer'>
			<div className='container'>
				<h1 >Врачи</h1>
				<div>фильтры</div>
				<div className='employeesSlider-slide d-flex flex-column'>
					<div className='photo'>
						<img src='/media/employeesSlider/aliya-beglova.jpg' alt='' />
					</div>
					<div className='info d-flex flex-column justify-content-between'>
						<div className='info-text d-flex flex-column'>
							<p className='info-text-name mb-0'>Алия Беглова</p>
							<p className='info-text-position mb-0'>Врач-ортодонт</p>
						</div>
						<div className='info-badge'>
							<p className='mb-0'>Взрослый и детский врач</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DoctorsContainer