import React, {useState} from 'react';
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {useDispatch} from "react-redux";
import {toggleMakeRecordModal} from "../../store/actions/makeRecordModal/makeRecordModal";

export default function MainSlider(){
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);
    const dispatch = useDispatch();

    const updateCounts = (activeIndex, count)=>{
        setActiveSlide(activeIndex+1); setSlidesCount(count);
    }

    return <section className='mainSlider'>
        <div className="container">
            <Swiper slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{nextEl: '.mainSlider .mainSlider-slide .swiper-button-next', prevEl: '.mainSlider .mainSlider-slide .swiper-button-prev'}}
                    onSlideChange={({activeIndex, slides})=> {updateCounts(activeIndex, slides.length)}}
                    onInit={({activeIndex, slides})=> {updateCounts(activeIndex, slides.length)}}
            >
                <SwiperSlide className='mainSlider-slide'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='text d-flex flex-column justify-content-between'>
                            <div className='text-content d-flex flex-column'>
                                <h2 className='mb-0'>Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                <p className='mb-0'>Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную консультацию</p>
                                <div className='d-flex btnWrap'>
                                    <div className='btn btn-dark-trnsp flex-grow-1 flex-md-grow-0' onClick={()=>dispatch(toggleMakeRecordModal(true))}>Записаться</div>
                                </div>
                            </div>

                            <div className="arrows d-none d-md-flex align-items-center">
                                <div className="swiper-button-prev">
                                    <img src="/assets/img/mainSlider/arrow-left.svg"/>
                                </div>
                                <span>{activeSlide} / {slidesCount}</span>
                                <div className="swiper-button-next">
                                    <img src="/assets/img/mainSlider/arrow-right.svg"/>
                                </div>
                            </div>

                            <div className='bckgIcon d-none d-md-block'>
                                <img src="/assets/img/mainSlider/union.svg" alt=""/>
                            </div>
                        </div>
                        <div className='photo'>
                            <img src="/media/mainSlider/1.jpeg" alt=""/>
                        </div>

                        <div className="arrows d-flex d-md-none align-items-center justify-content-between">
                            <div className="swiper-button-prev">
                                <img src="/assets/img/mainSlider/arrow-left.svg"/>
                            </div>
                            <span>{activeSlide} / {slidesCount}</span>
                            <div className="swiper-button-next">
                                <img src="/assets/img/mainSlider/arrow-right.svg"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mainSlider-slide'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='text d-flex flex-column justify-content-between'>
                            <div className='text-content d-flex flex-column'>
                                <h2 className='mb-0'>Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                <p className='mb-0'>Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную консультацию</p>
                                <div className='d-flex btnWrap'>
                                    <div className='btn btn-dark-trnsp flex-grow-1 flex-md-grow-0' onClick={()=>dispatch(toggleMakeRecordModal(true))}>Записаться</div>
                                </div>
                            </div>

                            <div className="arrows d-none d-md-flex align-items-center">
                                <div className="swiper-button-prev">
                                    <img src="/assets/img/mainSlider/arrow-left.svg"/>
                                </div>
                                <span>{activeSlide} / {slidesCount}</span>
                                <div className="swiper-button-next">
                                    <img src="/assets/img/mainSlider/arrow-right.svg"/>
                                </div>
                            </div>

                            <div className='bckgIcon d-none d-md-block'>
                                <img src="/assets/img/mainSlider/union.svg" alt=""/>
                            </div>
                        </div>
                        <div className='photo'>
                            <img src="/media/mainSlider/1.jpeg" alt=""/>
                        </div>

                        <div className="arrows d-flex d-md-none align-items-center justify-content-between">
                            <div className="swiper-button-prev">
                                <img src="/assets/img/mainSlider/arrow-left.svg"/>
                            </div>
                            <span>{activeSlide} / {slidesCount}</span>
                            <div className="swiper-button-next">
                                <img src="/assets/img/mainSlider/arrow-right.svg"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mainSlider-slide'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='text d-flex flex-column justify-content-between'>
                            <div className='text-content d-flex flex-column'>
                                <h2 className='mb-0'>Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                <p className='mb-0'>Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную консультацию</p>
                                <div className='d-flex btnWrap'>
                                    <div className='btn btn-dark-trnsp flex-grow-1 flex-md-grow-0' onClick={()=>dispatch(toggleMakeRecordModal(true))}>Записаться</div>
                                </div>
                            </div>

                            <div className="arrows d-none d-md-flex align-items-center">
                                <div className="swiper-button-prev">
                                    <img src="/assets/img/mainSlider/arrow-left.svg"/>
                                </div>
                                <span>{activeSlide} / {slidesCount}</span>
                                <div className="swiper-button-next">
                                    <img src="/assets/img/mainSlider/arrow-right.svg"/>
                                </div>
                            </div>

                            <div className='bckgIcon d-none d-md-block'>
                                <img src="/assets/img/mainSlider/union.svg" alt=""/>
                            </div>
                        </div>
                        <div className='photo'>
                            <img src="/media/mainSlider/1.jpeg" alt=""/>
                        </div>

                        <div className="arrows d-flex d-md-none align-items-center justify-content-between">
                            <div className="swiper-button-prev">
                                <img src="/assets/img/mainSlider/arrow-left.svg"/>
                            </div>
                            <span>{activeSlide} / {slidesCount}</span>
                            <div className="swiper-button-next">
                                <img src="/assets/img/mainSlider/arrow-right.svg"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mainSlider-slide'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='text d-flex flex-column justify-content-between'>
                            <div className='text-content d-flex flex-column'>
                                <h2 className='mb-0'>Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                <p className='mb-0'>Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную консультацию</p>
                                <div className='d-flex btnWrap'>
                                    <div className='btn btn-dark-trnsp flex-grow-1 flex-md-grow-0' onClick={()=>dispatch(toggleMakeRecordModal(true))}>Записаться</div>
                                </div>
                            </div>

                            <div className="arrows d-none d-md-flex align-items-center">
                                <div className="swiper-button-prev">
                                    <img src="/assets/img/mainSlider/arrow-left.svg"/>
                                </div>
                                <span>{activeSlide} / {slidesCount}</span>
                                <div className="swiper-button-next">
                                    <img src="/assets/img/mainSlider/arrow-right.svg"/>
                                </div>
                            </div>

                            <div className='bckgIcon d-none d-md-block'>
                                <img src="/assets/img/mainSlider/union.svg" alt=""/>
                            </div>
                        </div>
                        <div className='photo'>
                            <img src="/media/mainSlider/1.jpeg" alt=""/>
                        </div>

                        <div className="arrows d-flex d-md-none align-items-center justify-content-between">
                            <div className="swiper-button-prev">
                                <img src="/assets/img/mainSlider/arrow-left.svg"/>
                            </div>
                            <span>{activeSlide} / {slidesCount}</span>
                            <div className="swiper-button-next">
                                <img src="/assets/img/mainSlider/arrow-right.svg"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
}