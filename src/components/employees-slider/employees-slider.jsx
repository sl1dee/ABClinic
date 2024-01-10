import arrowLeft from '@assets/img/employeesSlider/arrow-left.svg'
import arrowRight from '@assets/img/employeesSlider/arrow-right.svg'
import cn from 'classnames'
import React, {useMemo, useState} from 'react'
import {Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'

import EmployeesSliderCard from '@components/employees-slider/employees-slider-card/employees-slider-card.jsx'

import cl from './employees-slider.module.scss'
import {Link} from "react-router-dom";

export default function EmployeesSlider({sliderHeaderText}) {
    const [swiper, setSwiper] = useState(null)
    const prevSwipeHandler = () => {
        swiper?.slidePrev()
    }
    const nextSwipeHandler = () => {
        swiper?.slideNext()
    }
    const doctorsList = useMemo(
        () => [
            {
                id: 0,
                img: '/media/employeesSlider/aliya.jpg',
                name: 'Алия Беглова',
                qualification: 'Врач-ортодонт',
                information: 'Взрослый врач',
                href: '/doctor/12'
            },
            {
                id: 1,
                img: '/media/employeesSlider/nasima.jpg',
                name: 'Насима Шагаева',
                qualification: 'Врач-стоматолог-ортопед',
                information: 'Взрослый врач'
            },
            {
                id: 2,
                img: '/media/employeesSlider/eliza.jpg',
                name: 'Элиза Мигранова',
                qualification: 'Врач-стоматолог-терапевт',
                information: 'Взрослый врач'
            },
            {
                id: 3,
                img: '/media/employeesSlider/almaz.jpg',
                name: 'Алмаз Гафурьянов',
                qualification: 'Врач-гигиенист',
                information: 'Взрослый врач'
            },
            {
                id: 4,
                img: '/media/employeesSlider/adel.jpg',
                name: 'Адель Ахметова',
                qualification: 'Врач-стоматолог-ортодонт',
                information: 'Взрослый и детский врач'
            },
            {
                id: 5,
                img: '/media/employeesSlider/timur.jpg',
                name: 'Тимур Ишмухаметов',
                qualification: 'Стоматолог',
                information: 'Взрослый врач'
            },
            {
                id: 6,
                img: '/media/employeesSlider/ilgiz.jpg',
                name: 'Ильгиз Каримов',
                qualification: 'Врач-стоматолог-терапевт',
                information: 'Взрослый врач'
            },
            // {
            //     id: 7,
            //     img: '/media/employeesSlider/aliya.jpg',
            //     name: 'Сединкин Евгений',
            //     qualification: 'Врач-стоматолог-ортопед',
            //     information: 'Взрослый врач'
            // },
            {
                id: 7,
                img: '/media/employeesSlider/alena.jpg',
                name: 'Алена Исламгалеева',
                qualification: 'Главная медсестра',
                information: 'Главная медсестра'
            },
            {
                id: 8,
                img: '/media/employeesSlider/elvira.jpg',
                name: 'Эльвира Яхина',
                qualification: 'Администратор',
                information: 'Администратор'
            }
        ],
        []
    )


    return (
        <section className={cl.employeesSlider}>
            <div className="container d-flex flex-column">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <h2 className={cn([cl.employeesSliderHeader, 'mb-0'])}>{sliderHeaderText}</h2>
                    </div>
                    <div className={cn([cl.arrows, 'd-none', 'd-md-flex', 'align-items-center'])}>
                        <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                            <img src={arrowLeft} alt=""/>
                        </div>
                        <div onClick={nextSwipeHandler} className={cl.swiperButtonNex}>
                            <img src={arrowRight} alt=""/>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    modules={[Navigation]}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    navigation={{
                        nextEl: '.employeesSlider .swiper-button-next',
                        prevEl: '.employeesSlider .swiper-button-prev'
                    }}
                    loop={false}
                    className={cl.slider}
                >
                    {doctorsList.map(({id, img, name, qualification, information, href}) => (
                        <SwiperSlide key={id} className={cn([cl.employeesSliderSlide, 'd-flex', 'flex-column'])}>
                            <Link to={href}>
                                <EmployeesSliderCard img={img} information={information} name={name}
                                                     qualification={qualification}/>
                            </Link>
                            {/*<EmployeesSliderCard img={img} information={information} name={name} qualification={qualification} />*/}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
