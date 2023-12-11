import React from 'react';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export default function ReviewsSlider(){

    return (
        <section className='reviewsSlider'>
            <div className="container d-flex flex-column">
                <div className='d-flex align-items-center'>
                    <div className='flex-grow-1'>
                        <h2 className='reviewsSlider-header mb-0'>Отзывы пациентов</h2>
                    </div>
                    <div className="arrows d-none d-md-flex align-items-center">
                        <div className="swiper-button-prev">
                            <img src="/assets/img/reviewsSlider/arrow-left.svg"/>
                        </div>
                        <div className="swiper-button-next">
                            <img src="/assets/img/reviewsSlider/arrow-right.svg"/>
                        </div>
                    </div>
                </div>
                <Swiper slidesPerView={'auto'}
                        spaceBetween={20}
                        modules={[Navigation, Pagination]}
                        navigation={{nextEl: '.reviewsSlider .swiper-button-next', prevEl: '.reviewsSlider .swiper-button-prev'}}
                        loop={false}>
                    <SwiperSlide className='reviewsSlider-slide'>
                        <div className='d-flex flex-column'>
                            <div className='photo'>
                                <img src="/media/reviewsSlider/1.jpeg" alt=""/>
                            </div>
                            <div className='icon'>
                                <img src="/assets/img/reviewsSlider/play.svg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviewsSlider-slide'>
                        <div className='d-flex flex-column'>
                            <div className='photo'>
                                <img src="/media/reviewsSlider/2.jpeg" alt=""/>
                            </div>
                            <div className='icon'>
                                <img src="/assets/img/reviewsSlider/play.svg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviewsSlider-slide'>
                        <div className='d-flex flex-column'>
                            <div className='photo'>
                                <img src="/media/reviewsSlider/2.jpeg" alt=""/>
                            </div>
                            <div className='icon'>
                                <img src="/assets/img/reviewsSlider/play.svg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviewsSlider-slide'>
                        <div className='d-flex flex-column'>
                            <div className='photo'>
                                <img src="/media/reviewsSlider/2.jpeg" alt=""/>
                            </div>
                            <div className='icon'>
                                <img src="/assets/img/reviewsSlider/play.svg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviewsSlider-slide'>
                        <div className='d-flex flex-column'>
                            <div className='photo'>
                                <img src="/media/reviewsSlider/2.jpeg" alt=""/>
                            </div>
                            <div className='icon'>
                                <img src="/assets/img/reviewsSlider/play.svg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='reviewsSlider-slide'>
                        <div className='d-flex flex-column'>
                            <div className='photo'>
                                <img src="/media/reviewsSlider/2.jpeg" alt=""/>
                            </div>
                            <div className='icon'>
                                <img src="/assets/img/reviewsSlider/play.svg" alt=""/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}