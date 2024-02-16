import four from '@media/about/four.jpg'
import one from '@media/about/one.jpg'
import three from '@media/about/three.jpg'
import two from '@media/about/two.jpg'
import cn from 'classnames'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './about.module.scss'

export default function About() {
	return (
		<section className={cl.about}>
			<div className="container d-flex flex-column">
				<div className={cn([cl.aboutHeaderWrap, 'd-flex', 'flex-column', 'flex-lg-row', 'align-items-start'])}>
					<div className="flex-grow-1">
						<h1 className={cn([cl.aboutHeader, 'mb-0'])}>AB Clinic семейная стоматология в Уфе</h1>
					</div>
					<div className={cl.aboutDescription}>
						<p className="mb-0">
							AB Clinic работают профессиональные и опытные врачи. Среди наших услуг взрослая и детская стоматология,
							лечение кариеса, исправление прикуса, установка брекетов и элайнеров, имплантация, профессиональная
							гигиена.
						</p>
					</div>
				</div>
				<Swiper slidesPerView="auto" spaceBetween={20} allowTouchMove loop={false} className={cl.slider}>
					<SwiperSlide className={cl.aboutSlide}>
						<img src={one} alt="" />
					</SwiperSlide>
					<SwiperSlide className={cl.aboutSlide}>
						<img src={two} alt="" />
					</SwiperSlide>
					<SwiperSlide className={cl.aboutSlide}>
						<img src={three} alt="" />
					</SwiperSlide>
					<SwiperSlide className={cl.aboutSlide}>
						<img src={four} alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}
