import src from '@media/about/1.jpg'
import cn from 'classnames'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './about.module.scss'

export default function About() {
	return (
		<section className="about">
			<div className="container d-flex flex-column">
				<div className={cn([cl.aboutHeaderWrap, 'd-flex', 'flex-column', 'flex-lg-row', 'align-items-start'])}>
					<div className="flex-grow-1">
						<h2 className={cn([cl.aboutHeader, 'mb-0'])}>AB Clinic семейная стоматология в Уфе</h2>
					</div>
					<div className={cl.aboutDescription}>
						<p className="mb-0">
							AB Clinic работают профессиональные и опытные врачи. Среди наших услуг взрослая и детская стоматология,
							лечение кариеса, исправление прикуса, установка брекетов и элайнеров, имплантация, профессиональная
							гигиена.
						</p>
					</div>
				</div>
				<Swiper slidesPerView="auto" spaceBetween={20} allowTouchMove loop={false}>
					<SwiperSlide className={cl.aboutSlide}>
						<img src={src} alt="" />
					</SwiperSlide>
					<SwiperSlide className={cl.aboutSlide}>
						<img src="/media/about/2.jpg" alt="" />
					</SwiperSlide>
					<SwiperSlide className={cl.aboutSlide}>
						<img src="/media/about/3.jpg" alt="" />
					</SwiperSlide>
					<SwiperSlide className={cl.aboutSlide}>
						<img src="/media/about/4.jpg" alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}
