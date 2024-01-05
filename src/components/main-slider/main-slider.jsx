import arrowLeft from '@assets/img/mainSlider/arrow-left.svg'
import arrowRight from '@assets/img/mainSlider/arrow-right.svg'
import union from '@assets/img/mainSlider/union.svg'
import aliya from '@media/mainSlider/aliya.jpeg'
import {setSignUpIsOpen} from '@store/modules/modals.js'
import cn from 'classnames'
import React, {useState} from 'react'
import {Navigation} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'

import Button from '@ui/button/button.jsx'

import cl from './main-slider.module.scss'

import {useDispatch} from 'react-redux'


export default function MainSlider() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [slidesCount, setSlidesCount] = useState(0)
    const dispatch = useDispatch()

    const openModalHandler = () => {
        dispatch(setSignUpIsOpen(true))
    }

    const updateCounts = (activeIndex, count) => {
        setActiveSlide(activeIndex + 1)
        setSlidesCount(count)
    }
    const [swiper, setSwiper] = useState(null)
    const prevSwipeHandler = () => {
        swiper?.slidePrev()
    }
    const nextSwipeHandler = () => {
        swiper?.slideNext()
    }


    return (
        <section className={cl.mainSlider}>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.mainSlider .mainSlider-slide .swiper-button-next',
                        prevEl: '.mainSlider .mainSlider-slide .swiper-button-prev'
                    }}
                    onSlideChange={({activeIndex, slides}) => {
                        updateCounts(activeIndex, slides.length)
                    }}
                    onInit={({activeIndex, slides}) => {
                        updateCounts(activeIndex, slides.length)
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}

                >
                    <SwiperSlide className={cl.mainSliderSlide}>
                        <div className="d-flex flex-column flex-md-row">
                            <div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                <div className={cn([cl.textContent, 'd-flex', 'flex-column'])}>
                                    <h2 className="mb-0">Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                    <p className="mb-0">
                                        Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную
                                        консультацию
                                    </p>
                                    <div className={cn([cl.btnWrapper, 'd-flex'])}>
                                        <Button onClick={openModalHandler} colorStyle="primary"
                                                className={cn([cl.btn, 'flex-md-grow-0'])}>
                                            Записаться
                                        </Button>
                                    </div>
                                </div>

                                <div className={cn([cl.arrows, 'd-none', 'd-md-flex', 'align-items-center'])}>
                                    <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                        <img src={arrowLeft} alt=""/>
                                    </div>
                                    <span>
										{activeSlide} / {slidesCount}
									</span>
                                    <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                        <img src={arrowRight} alt=""/>
                                    </div>
                                </div>

                                <div className={cn([cl.bckgIcon, 'd-none', 'd-xxl-block'])}>
                                    <img src={union} alt=""/>
                                </div>
                            </div>
                            <div className={cl.photo}>
                                <img src={aliya} alt=""/>
                            </div>

                            <div
                                className={cn([cl.arrows, 'd-flex', 'd-md-none', 'align-items-center', 'justify-content-between'])}>
                                <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                    <img src={arrowLeft} alt=""/>
                                </div>
                                <span>
									{activeSlide} / {slidesCount}
								</span>
                                <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                    <img src={arrowRight} alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cl.mainSliderSlide}>
                        <div className="d-flex flex-column flex-md-row">
                            <div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                <div className={cn([cl.textContent, 'd-flex', 'flex-column'])}>
                                    <h2 className="mb-0">Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                    <p className="mb-0">
                                        Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную
                                        консультацию
                                    </p>
                                    <div className={cn([cl.btnWrapper, 'd-flex'])}>
                                        <Button onClick={openModalHandler} colorStyle="primary"
                                                className={cn([cl.btn, 'flex-md-grow-0'])}>
                                            Записаться
                                        </Button>
                                    </div>
                                </div>

                                <div className={cn([cl.arrows, 'd-none', 'd-md-flex', 'align-items-center'])}>
                                    <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                        <img src={arrowLeft} alt=""/>
                                    </div>
                                    <span>
										{activeSlide} / {slidesCount}
									</span>
                                    <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                        <img src={arrowRight} alt=""/>
                                    </div>
                                </div>

                                <div className={cn([cl.bckgIcon, 'd-none', 'd-xxl-block'])}>
                                    <img src={union} alt=""/>
                                </div>
                            </div>
                            <div className={cl.photo}>
                                <img src={aliya} alt=""/>
                            </div>

                            <div
                                className={cn([cl.arrows, 'd-flex', 'd-md-none', 'align-items-center', 'justify-content-between'])}>
                                <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                    <img src={arrowLeft} alt=""/>
                                </div>
                                <span>
									{activeSlide} / {slidesCount}
								</span>
                                <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                    <img src={arrowRight} alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cl.mainSliderSlide}>
                        <div className="d-flex flex-column flex-md-row">
                            <div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                <div className={cn([cl.textContent, 'd-flex', 'flex-column'])}>
                                    <h2 className="mb-0">Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                    <p className="mb-0">
                                        Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную
                                        консультацию
                                    </p>
                                    <div className={cn([cl.btnWrapper, 'd-flex'])}>
                                        <Button onClick={openModalHandler} colorStyle="primary"
                                                className={cn([cl.btn, 'flex-md-grow-0'])}>
                                            Записаться
                                        </Button>
                                    </div>
                                </div>

                                <div className={cn([cl.arrows, 'd-none', 'd-md-flex', 'align-items-center'])}>
                                    <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                        <img src={arrowLeft} alt=""/>
                                    </div>
                                    <span>
										{activeSlide} / {slidesCount}
									</span>
                                    <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                        <img src={arrowRight} alt=""/>
                                    </div>
                                </div>

                                <div className={cn([cl.bckgIcon, 'd-none', 'd-xxl-block'])}>
                                    <img src={union} alt=""/>
                                </div>
                            </div>
                            <div className={cl.photo}>
                                <img src={aliya} alt=""/>
                            </div>

                            <div
                                className={cn([cl.arrows, 'd-flex', 'd-md-none', 'align-items-center', 'justify-content-between'])}>
                                <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                    <img src={arrowLeft} alt=""/>
                                </div>
                                <span>
									{activeSlide} / {slidesCount}
								</span>
                                <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                    <img src={arrowRight} alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cl.mainSliderSlide}>
                        <div className="d-flex flex-column flex-md-row">
                            <div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                <div className={cn([cl.textContent, 'd-flex', 'flex-column'])}>
                                    <h2 className="mb-0">Предупреждение лучше лечения: заботимся об улыбках заранее</h2>
                                    <p className="mb-0">
                                        Современная стоматология в Уфе для взрослых и детей. Запишитесь на бесплатную
                                        консультацию
                                    </p>
                                    <div className={cn([cl.btnWrapper, 'd-flex'])}>
                                        <Button onClick={openModalHandler} colorStyle="primary"
                                                className={cn([cl.btn, 'flex-md-grow-0'])}>
                                            Записаться
                                        </Button>
                                    </div>
                                </div>

                                <div className={cn([cl.arrows, 'd-none', 'd-md-flex', 'align-items-center'])}>
                                    <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                        <img src={arrowLeft} alt=""/>
                                    </div>
                                    <span>
										{activeSlide} / {slidesCount}
									</span>
                                    <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                        <img src={arrowRight} alt=""/>
                                    </div>
                                </div>

                                <div className={cn([cl.bckgIcon, 'd-none', 'd-xxl-block'])}>
                                    <img src={union} alt=""/>
                                </div>
                            </div>
                            <div className={cl.photo}>
                                <img src={aliya} alt=""/>
                            </div>

                            <div
                                className={cn([cl.arrows, 'd-flex', 'd-md-none', 'align-items-center', 'justify-content-between'])}>
                                <div onClick={prevSwipeHandler} className={cl.swiperButtonPrev}>
                                    <img src={arrowLeft} alt=""/>
                                </div>
                                <span>
									{activeSlide} / {slidesCount}
								</span>
                                <div onClick={nextSwipeHandler} className={cl.swiperButtonNext}>
                                    <img src={arrowRight} alt=""/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
