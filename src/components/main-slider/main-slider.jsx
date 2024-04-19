import arrowLeft from '@assets/img/mainSlider/arrow-left.svg'
import arrowRight from '@assets/img/mainSlider/arrow-right.svg'
import shield from '@media/mainSlider/shield.png'
import union from '@media/mainSlider/union.png'
import stars from '@media/mainSlider/stars.png'
import aliya from '@media/mainSlider/aliya.jpg'
import hands from '@media/mainSlider/hands.jpg'
import children from '@media/mainSlider/children.jpg'
import procedure from '@media/mainSlider/procedure.jpg'
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
import {Link} from "react-router-dom";


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
                        updateCounts(activeIndex, 4)
                    }}
                    onInit={({activeIndex, slides}) => {
                        updateCounts(activeIndex, 4)
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}

                >
                    <SwiperSlide className={cl.mainSliderSlide}>
                        <div className="d-flex flex-column flex-md-row">
                            <div className={cn([cl.text, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                <div className={cn([cl.textContent, 'd-flex', 'flex-column'])}>
                                    <h1 className={cn([cl.textContentTitle, 'mb-0'])}>Детская стоматология с заботой и
                                        профессионализмом</h1>
                                    <p className="mb-0">
                                        Наши стоматологи найдут подход к вашему ребёнку и сделают сеанс быстрым и
                                        безболезненным
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
                                <img src={children} alt=""/>
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
                                    <h2 className={cn([cl.textContentTitle, 'mb-0'])}>Лечение зубов и десен в Уфе</h2>
                                    <p className="mb-0">
                                        Современные методики лечения, доказательная медицина и новейшее
                                        стоматологическое оборудование
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
                                <img src={procedure} alt=""/>
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
                                    <h2 className={cn([cl.textContentTitle, 'mb-0'])}>Запускаем программу
                                        лояльности</h2>
                                    <p className="mb-0">
                                        Если вы прошли полное лечение по КТ и раз в 4 месяца проходили профессиональную
                                        гигиену полости рта, то лечение кариеса выполним БЕСПЛАТНО
                                    </p>
                                    <Link to='/loyalty-program'>
                                        <div className={cn([cl.btnWrapper, 'd-flex'])}>
                                            <Button colorStyle="primary"
                                                    className={cn([cl.btn, 'flex-md-grow-0'])}>
                                                Подробнее
                                            </Button>
                                        </div>
                                    </Link>
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
                                    <img src={shield} alt=""/>
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
                                    <h2 className={cn([cl.textContentTitle, 'mb-0'])}>Нам очень важно ваше мнение
                                        :)</h2>
                                    <p className="mb-0">
                                        Отдел контроля качества для ваших вопросов, замечаний или мнений по улучшению
                                        нашей клиники.
                                    </p>
                                    <Link to='/quality-department'>
                                        <div className={cn([cl.btnWrapper, 'd-flex'])}>
                                            <Button colorStyle="primary"
                                                    className={cn([cl.btn, 'flex-md-grow-0'])}>
                                                Отдел качества
                                            </Button>
                                        </div>
                                    </Link>
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
                                    <img src={stars} alt=""/>
                                </div>
                            </div>
                            <div className={cl.photo}>
                                <img src={hands} alt=""/>
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
