import React, { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './reviews-slider.module.scss'
import cn from 'classnames'
import arrowLeft from '@assets/img/reviewsSlider/arrow-left.svg'
import arrowRight from '@assets/img/reviewsSlider/arrow-right.svg'

import play from '@assets/img/reviewsSlider/play.svg'

export default function ReviewsSlider() {
	const [swiper, setSwiper] = useState(null)
	const prevSwipeHandler = () => {
		swiper?.slidePrev()
	}
	const nextSwipeHandler = () => {
		swiper?.slideNext()
	}
	return (
		<section className={cl.reviewsSlider}>
			<div className="container d-flex flex-column">
				<div className="d-flex align-items-center">
					<div className="flex-grow-1">
						<h2 className={cn([cl.reviewsSliderHeader,'mb-0'])}>Отзывы пациентов</h2>
					</div>
						<div className={cn([cl.arrows, 'd-none' ,'d-md-flex','align-items-center'])}>
							<div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
								<img src={arrowLeft} alt='' />
							</div>
							<div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
								<img src={arrowRight}  alt=''/>
							</div>
						</div>
					</div>
					<Swiper
						slidesPerView="auto"
						spaceBetween={20}
						modules={[Navigation, Pagination]}
						onSwiper={(swiper) => setSwiper(swiper)}
						navigation={{ nextEl: '.reviewsSlider .swiper-button-next', prevEl: '.reviewsSlider .swiper-button-prev' }}
						loop={false}
						className={cl.slider}
					>
						<SwiperSlide className={cl.reviewsSliderSlide}>
							<div className="d-flex flex-column">
								<div className={cl.photo}>
									<img src="/media/reviewsSlider/1.jpg" alt="" />
								</div>
								<div className={cl.icon}>
									<img src={play} alt="" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cl.reviewsSliderSlide}>
							<div className="d-flex flex-column">
								<div className={cl.photo}>
									<img src="/media/reviewsSlider/2.jpg" alt="" />
								</div>
								<div className={cl.icon}>
									<img src={play} alt="" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cl.reviewsSliderSlide}>
							<div className="d-flex flex-column">
								<div className={cl.photo}>
									<img src="/media/reviewsSlider/3.jpg" alt="" />
								</div>
								<div className={cl.icon}>
									<img src={play} alt="" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cl.reviewsSliderSlide}>
							<div className="d-flex flex-column">
								<div className={cl.photo}>
									<img src="/media/reviewsSlider/1.jpg" alt="" />
								</div>
								<div className={cl.icon}>
									<img src={play} alt="" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cl.reviewsSliderSlide}>
							<div className="d-flex flex-column">
								<div className={cl.photo}>
									<img src="/media/reviewsSlider/2.jpg" alt="" />
								</div>
								<div className={cl.icon}>
									<img src={play} alt="" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cl.reviewsSliderSlide}>
							<div className="d-flex flex-column">
								<div className={cl.photo}>
									<img src="/media/reviewsSlider/3.jpg" alt="" />
								</div>
								<div className={cl.icon}>
									<img src={play} alt="" />
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
		</section>
	)
}
