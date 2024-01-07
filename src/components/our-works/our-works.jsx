import after from '@media/ourWorks/after-1.jpg'
import before from '@media/ourWorks/before-1.jpg'
import chevronsLeftRight from '@assets/img/ourWorks/chevrons-left-right.svg'
import arrowRight from '@assets/img/ourWorks/arrow-right.svg'
import arrowLeft from '@assets/img/ourWorks/arrow-left.svg'
import {setSignUpIsOpen} from '@store/modules/modals.js'
import cn from 'classnames'
import React, {useState} from 'react'
import ReactCompareImage from 'react-compare-image'
import {useDispatch} from 'react-redux'
import {Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'

import Button from '@ui/button/index.js'

import cl from './our-works.module.scss'

export default function OurWorks() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [slidesCount, setSlidesCount] = useState(0)
    const [swiper, setSwiper] = useState(null)
    const dispatch = useDispatch()

    const openModalHandler = () => {
        dispatch(setSignUpIsOpen(true))
    }

    const prevSwipeHandler = () => {
        swiper?.slidePrev()
    }
    const nextSwipeHandler = () => {
        swiper?.slideNext()
    }

    const updateCounts = (activeIndex, count) => {
        setActiveSlide(activeIndex + 1)
        setSlidesCount(count)
    }


    return (
        <section className={cl.ourWorks}>
            <div className="container d-flex flex-column">
                <div className={cn([cl.ourWorksContent, 'd-flex', 'flex-column'])}>
                    <div
                        className={cn([
                            cl.ourWorksHeaderWrap,
                            'd-flex',
                            'flex-column',
                            'flex-md-row',
                            'align-items-md-center',
                            'align-items-start'
                        ])}
                    >
                        <div className="flex-grow-1">
                            <h2 className={cn([cl.ourWorksHeader, 'mb-0'])}>Наши работы</h2>
                        </div>
                        <div className={cn([cl.arrows, 'd-flex', 'align-items-center'])}>
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

                    <Swiper
                        slidesPerView='auto'
                        spaceBetween={20}
                        modules={[Navigation, Pagination]}
                        navigation={{
                            nextEl: `${cl.ourWorks} ${cl.swiperButtonNext}`,
                            prevEl: `${cl.ourWorks} ${cl.swiperButtonPrev}`
                        }}
                        allowTouchMove={false}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        loop={false}
                        onSlideChange={({activeIndex, slides}) => {
                            updateCounts(activeIndex, slides.length)
                        }}
                        onInit={({activeIndex, slides}) => {
                            updateCounts(activeIndex, slides.length)
                        }}
                        className={cl.swiperWrapper}
                    >
                        <SwiperSlide
                            className={cn([cl.ourWorksSlide, 'd-flex', 'flex-column', 'flex-lg-row-reverse', 'flex-xl-row'])}
                        >
                            <div className={cn([cl.compareWrap, 'flex-grow-1', 'd-flex', 'flex-column'])}>
                                <div className={cl.compare}>
                                    <ReactCompareImage
                                        leftImage={before}
                                        rightImage={after}
                                        sliderLineWidth={6}
                                        sliderLineColor="#F1F3FF"
                                        leftImageLabel="До"
                                        rightImageLabel="После"
                                        handle={
                                            <div
                                                className={cn([cl.compareHandler, 'd-flex', 'justify-content-center', 'align-items-center'])}
                                            >
                                                <img src={chevronsLeftRight} alt=""/>
                                            </div>
                                        }
                                    />
                                </div>
                                <div
                                    className={cn([cl.person, 'align-items-center', 'd-none', 'd-lg-flex', 'd-xl-none'])}>
                                    <div
                                        className={cl.personAvatar}
                                        style={{backgroundImage: 'url(/media/employeesSlider/nasima.jpg)'}}
                                    />
                                    <div className={cn([cl.personText, 'd-flex', 'flex-column'])}>
                                        <p className={cn([cl.personTextPosition, 'mb-0'])}>Врач-ортодонт</p>
                                        <p className={cn([cl.personTextName, 'mb-0'])}>Иванова Алекснадра</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={cn([cl.textWrap, 'd-flex', 'justify-content-lg-between', 'flex-column', 'flex-md-row'])}>
                                <div
                                    className={cn([
                                        cl.description,
                                        'flex-grow-1',
                                        'd-flex',
                                        'flex-column',
                                        'd-lg-none',
                                        'd-xl-flex',
                                        'flex-column',
                                        'justify-content-between'
                                    ])}
                                >
                                    <div className={cn([cl.descriptionContent, 'd-flex', 'flex-column'])}>
                                        <div className={cl.descriptionHeader}>
                                            <p className="mb-0">Жалобы пациента</p>
                                        </div>
                                        <div className={cl.descriptionText}>
                                            <p className="mb-0">
                                                Пациентка обратилась с жалобами на изменение цвета центрального резца на
                                                верхней челюсти.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={cn([cl.descriptionContent, 'd-none', 'd-md-flex', 'flex-column'])}>
                                        <div className={cl.descriptionHeader}>
                                            <p className="mb-0">Врач</p>
                                        </div>
                                        <div className={cn([cl.person, 'd-flex', 'align-items-center'])}>
                                            <div
                                                className={cl.personAvatar}
                                                style={{backgroundImage: 'url(/media/employeesSlider/nasima.jpg)'}}
                                            />
                                            <div className={cn([cl.personText, 'd-flex', 'flex-column'])}>
                                                <p className={cn([cl.personTextPosition, 'mb-0'])}>Врач-ортодонт</p>
                                                <p className={cn([cl.personTextName, 'mb-0'])}>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <Button onClick={openModalHandler} className="btn" colorStyle="outlined">
                                            Записаться
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className={cn([cl.description, 'flex-grow-1', 'd-flex', 'flex-column', 'justify-content-between'])}
                                >
                                    <div
                                        className={cn([cl.descriptionContent, 'd-none', 'd-lg-flex', 'd-xl-none', 'flex-column'])}>
                                        <div className={cl.descriptionHeader}>
                                            <p className="mb-0">Жалобы пациента</p>
                                        </div>
                                        <div className={cl.descriptionText}>
                                            <p className="mb-0">
                                                Пациентка обратилась с жалобами на изменение цвета центрального резца на
                                                верхней челюсти.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cn([cl.descriptionContent, 'd-flex', 'flex-column'])}>
                                        <div className={cl.descriptionHeader}>
                                            <p className="mb-0">Процесс лечения</p>
                                        </div>
                                        <div className={cl.descriptionText}>
                                            <p className="mb-0">
                                                При осмотре полости рта, выявили небольшую пломбу с небной поверхности
                                                центрального резца.
                                                Приняли решение провести внутрикоронковое отбеливание.
                                            </p>
                                        </div>
                                        <div className={cl.descriptionText}>
                                            <p className="mb-0">
                                                Определили исходный цвет депульпированного зуба. Провели
                                                внутрикоронковое отбеливание
                                                центрального резца препаратом Opalescence Endo Relif
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cn([cl.descriptionContent, 'd-flex', 'd-md-none', 'flex-column'])}>
                                        <div className={cl.descriptionHeader}>
                                            <p className="mb-0">Врач</p>
                                        </div>
                                        <div className={cn([cl.person, 'd-flex', 'align-items'])}>
                                            <div
                                                className={cl.personAvatar}
                                                style={{backgroundImage: 'url(/media/employeesSlider/nasima.jpg)'}}
                                            />
                                            <div className={cn([cl.personText, 'd-flex', 'flex-column'])}>
                                                <p className={cn([cl.personTextPosition, 'mb-0'])}>Врач-ортодонт</p>
                                                <p className={cn([cl.personTextName, 'mb-0'])}>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <Button onClick={openModalHandler} className={cl.btn} colorStyle="outlined">
                                            Записаться
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/*<SwiperSlide*/}
                        {/*    className={cn([cl.ourWorksSlide, 'd-flex', 'flex-column', 'flex-lg-row-reverse', 'flex-xl-row'])}*/}
                        {/*>*/}
                        {/*    <div className={cn([cl.compareWrap, 'flex-grow-1', 'd-flex', 'flex-column'])}>*/}
                        {/*        <div className={cl.compare}>*/}
                        {/*            <ReactCompareImage*/}
                        {/*                leftImage={before}*/}
                        {/*                rightImage={after}*/}
                        {/*                aspectRatio="taller"*/}
                        {/*                sliderLineWidth={6}*/}
                        {/*                sliderLineColor="#F1F3FF"*/}
                        {/*                leftImageLabel="До"*/}
                        {/*                rightImageLabel="После"*/}
                        {/*                handle={*/}
                        {/*                    <div*/}
                        {/*                        className={cn([cl.compareHandler, 'd-flex', 'justify-content-center', 'align-items-center'])}*/}
                        {/*                    >*/}
                        {/*                        <img src={chevronsLeftRight} alt=""/>*/}
                        {/*                    </div>*/}
                        {/*                }*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            className={cn([cl.person, 'align-items-center', 'd-none', 'd-lg-flex', 'd-xl-none'])}>*/}
                        {/*            <div className={cl.personAvatar}*/}
                        {/*                 style={{backgroundImage: 'url(/media/employeesSlider/nasima.jpg)'}}/>*/}
                        {/*            <div className={cn([cl.personText, 'd-flex', 'flex-column'])}>*/}
                        {/*                <p className={cn([cl.personTextPosition, 'mb-0'])}>Врач-ортодонт</p>*/}
                        {/*                <p className={cn([cl.personTextName, 'mb-0'])}>Иванова Алекснадра</p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className={cn([cl.textWrap, 'd-flex', 'justify-content-lg-between', 'flex-column', 'flex-md-row'])}>*/}
                        {/*        <div*/}
                        {/*            className={cn([*/}
                        {/*                cl.description,*/}
                        {/*                'flex-grow-1',*/}
                        {/*                'd-flex',*/}
                        {/*                'flex-column',*/}
                        {/*                'd-lg-none',*/}
                        {/*                'd-xl-flex',*/}
                        {/*                'flex-column',*/}
                        {/*                'justify-content-between'*/}
                        {/*            ])}*/}
                        {/*        >*/}
                        {/*            <div className={cn([cl.descriptionContent, 'd-flex', 'flex-column'])}>*/}
                        {/*                <div className={cl.descriptionHeader}>*/}
                        {/*                    <p className="mb-0">Жалобы пациента</p>*/}
                        {/*                </div>*/}
                        {/*                <div className={cl.descriptionText}>*/}
                        {/*                    <p className="mb-0">*/}
                        {/*                        Пациентка обратилась с жалобами на изменение цвета центрального резца на*/}
                        {/*                        верхней челюсти.*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}

                        {/*            <div className={cn([cl.descriptionContent, 'd-none', 'd-md-flex', 'flex-column'])}>*/}
                        {/*                <div className={cl.descriptionHeader}>*/}
                        {/*                    <p className="mb-0">Врач</p>*/}
                        {/*                </div>*/}
                        {/*                <div className={cn([cl.person, 'd-flex', 'align-items-center'])}>*/}
                        {/*                    <div*/}
                        {/*                        className={cl.personAvatar}*/}
                        {/*                        style={{backgroundImage: 'url(/media/employeesSlider/nasima.jpg)'}}*/}
                        {/*                    />*/}
                        {/*                    <div className={cn([cl.personText, 'd-flex', 'flex-column'])}>*/}
                        {/*                        <p className={cn([cl.personTextPosition, 'mb-0'])}>Врач-ортодонт</p>*/}
                        {/*                        <p className={cn([cl.personTextName, 'mb-0'])}>Иванова Алекснадра</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <Button onClick={openModalHandler} className="btn" colorStyle="outlined">*/}
                        {/*                    Записаться*/}
                        {/*                </Button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div*/}
                        {/*            className={cn([cl.description, 'flex-grow-1', 'd-flex', 'flex-column', 'justify-content-between'])}*/}
                        {/*        >*/}
                        {/*            <div*/}
                        {/*                className={cn([cl.descriptionContent, 'd-none', 'd-lg-flex', 'd-xl-none', 'flex-column'])}>*/}
                        {/*                <div className={cl.descriptionHeader}>*/}
                        {/*                    <p className="mb-0">Жалобы пациента</p>*/}
                        {/*                </div>*/}
                        {/*                <div className={cl.descriptionText}>*/}
                        {/*                    <p className="mb-0">*/}
                        {/*                        Пациентка обратилась с жалобами на изменение цвета центрального резца на*/}
                        {/*                        верхней челюсти.*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={cn([cl.descriptionContent, 'd-flex', 'flex-column'])}>*/}
                        {/*                <div className={cl.descriptionHeader}>*/}
                        {/*                    <p className="mb-0">Процесс лечения</p>*/}
                        {/*                </div>*/}
                        {/*                <div className={cl.descriptionText}>*/}
                        {/*                    <p className="mb-0">*/}
                        {/*                        При осмотре полости рта, выявили небольшую пломбу с небной поверхности*/}
                        {/*                        центрального резца.*/}
                        {/*                        Приняли решение провести внутрикоронковое отбеливание.*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*                <div className={cl.descriptionText}>*/}
                        {/*                    <p className="mb-0">*/}
                        {/*                        Определили исходный цвет депульпированного зуба. Провели*/}
                        {/*                        внутрикоронковое отбеливание*/}
                        {/*                        центрального резца препаратом Opalescence Endo Relif*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={cn([cl.descriptionContent, 'd-flex', 'd-md-none', 'flex-column'])}>*/}
                        {/*                <div className={cl.descriptionHeader}>*/}
                        {/*                    <p className="mb-0">Врач</p>*/}
                        {/*                </div>*/}
                        {/*                <div className={cn([cl.person, 'd-flex', 'align-items'])}>*/}
                        {/*                    <div*/}
                        {/*                        className={cl.personAvatar}*/}
                        {/*                        style={{backgroundImage: 'url(/media/employeesSlider/nasima.jpg)'}}*/}
                        {/*                    />*/}
                        {/*                    <div className={cn([cl.personText, 'd-flex', 'flex-column'])}>*/}
                        {/*                        <p className={cn([cl.personTextPosition, 'mb-0'])}>Врач-ортодонт</p>*/}
                        {/*                        <p className={cn([cl.personTextName, 'mb-0'])}>Иванова Алекснадра</p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <Button onClick={openModalHandler} className="btn" colorStyle="outlined">*/}
                        {/*                    Записаться*/}
                        {/*                </Button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</SwiperSlide>*/}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
