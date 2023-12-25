import React from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function EmployeesSlider() {
	return (
		<section className="employeesSlider">
			<div className="container d-flex flex-column">
				<div className="d-flex align-items-center">
					<div className="flex-grow-1">
						<h2 className="employeesSlider-header mb-0">Заботливые профессионалы клиники</h2>
					</div>
					<div className="arrows d-none d-md-flex align-items-center">
						<div className="swiper-button-prev">
							<img src="/assets/img/employeesSlider/arrow-left.svg" />
						</div>
						<div className="swiper-button-next">
							<img src="/assets/img/employeesSlider/arrow-right.svg" />
						</div>
					</div>
				</div>
				<Swiper
					slidesPerView="auto"
					spaceBetween={20}
					modules={[Navigation]}
					navigation={{
						nextEl: '.employeesSlider .swiper-button-next',
						prevEl: '.employeesSlider .swiper-button-prev'
					}}
					loop={false}
				>
					<SwiperSlide className="employeesSlider-slide d-flex flex-column">
						<div className="photo">
							<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
						</div>
						<div className="info d-flex flex-column justify-content-between">
							<div className="info-text d-flex flex-column">
								<p className="info-text-name mb-0">Алия Беглова</p>
								<p className="info-text-position mb-0">Врач-ортодонт</p>
							</div>
							<div className="info-badge">
								<p className="mb-0">Взрослый и детский врач</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="employeesSlider-slide">
						<div className="d-flex flex-column">
							<div className="photo">
								<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
							</div>
							<div className="info d-flex flex-column justify-content-between">
								<div className="info-text d-flex flex-column">
									<p className="info-text-name mb-0">Алия Беглова</p>
									<p className="info-text-position mb-0">Врач-ортодонт</p>
								</div>
								<div className="info-badge">
									<p className="mb-0">Взрослый и детский врач</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="employeesSlider-slide">
						<div className="d-flex flex-column">
							<div className="photo">
								<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
							</div>
							<div className="info d-flex flex-column justify-content-between">
								<div className="info-text d-flex flex-column">
									<p className="info-text-name mb-0">Алия Беглова</p>
									<p className="info-text-position mb-0">Врач-ортодонт</p>
								</div>
								<div className="info-badge">
									<p className="mb-0">Взрослый и детский врач</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="employeesSlider-slide">
						<div className="d-flex flex-column">
							<div className="photo">
								<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
							</div>
							<div className="info d-flex flex-column justify-content-between">
								<div className="info-text d-flex flex-column">
									<p className="info-text-name mb-0">Алия Беглова</p>
									<p className="info-text-position mb-0">Врач-ортодонт</p>
								</div>
								<div className="info-badge">
									<p className="mb-0">Взрослый и детский врач</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="employeesSlider-slide">
						<div className="d-flex flex-column">
							<div className="photo">
								<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
							</div>
							<div className="info d-flex flex-column justify-content-between">
								<div className="info-text d-flex flex-column">
									<p className="info-text-name mb-0">Алия Беглова</p>
									<p className="info-text-position mb-0">Врач-ортодонт</p>
								</div>
								<div className="info-badge">
									<p className="mb-0">Взрослый и детский врач</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="employeesSlider-slide">
						<div className="d-flex flex-column">
							<div className="photo">
								<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
							</div>
							<div className="info d-flex flex-column justify-content-between">
								<div className="info-text d-flex flex-column">
									<p className="info-text-name mb-0">Алия Беглова</p>
									<p className="info-text-position mb-0">Врач-ортодонт</p>
								</div>
								<div className="info-badge">
									<p className="mb-0">Взрослый и детский врач</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="employeesSlider-slide">
						<div className="d-flex flex-column">
							<div className="photo">
								<img src="/media/employeesSlider/aliya-beglova.jpg" alt="" />
							</div>
							<div className="info d-flex flex-column justify-content-between">
								<div className="info-text d-flex flex-column">
									<p className="info-text-name mb-0">Алия Беглова</p>
									<p className="info-text-position mb-0">Врач-ортодонт</p>
								</div>
								<div className="info-badge">
									<p className="mb-0">Взрослый и детский врач</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}
