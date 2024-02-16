import arrowLeft from '@assets/img/employeesSlider/arrow-left.svg';
import arrowRight from '@assets/img/employeesSlider/arrow-right.svg';
import {useGetDoctorSliderQuery} from '@store/modules/doctors-api.js';
import cn from 'classnames';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';


import EmployeesSliderCard from '@components/employees-slider/employees-slider-card/employees-slider-card.jsx';


import cl from './employees-slider.module.scss';


export default function EmployeesSlider({sliderHeaderText, serviceId, isViewAll}) {
    const [swiper, setSwiper] = useState(null)
    const prevSwipeHandler = () => {
        swiper?.slidePrev()
    }
    const nextSwipeHandler = () => {
        swiper?.slideNext()
    }

    const {data: doctorsList = []} = useGetDoctorSliderQuery(serviceId, {skip: !isViewAll && !serviceId});

    return (
        <section className={cl.employeesSlider}>
            <div className="container d-flex flex-column">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <h1 className={cn([cl.employeesSliderHeader, 'mb-0'])}>{sliderHeaderText}</h1>
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
                    {doctorsList.map(({id, image, name, directions, speciality}) => (
                        <SwiperSlide key={id} className={cn([cl.employeesSliderSlide, 'd-flex', 'flex-column'])}>
                            <Link to={id ? `/doctor/${id}` : undefined}>
                                <EmployeesSliderCard img={image} information={directions} name={name}
                                                     qualification={speciality}/>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}