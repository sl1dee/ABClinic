import React, {useState} from 'react';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import ReactCompareImage from "react-compare-image";

export default function OurWorks(){
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);

    const updateCounts = (activeIndex, count)=>{
        setActiveSlide(activeIndex+1); setSlidesCount(count);
    }

    return (
        <section className='ourWorks'>
            <div className="container d-flex flex-column">
                <div className='ourWorks-content d-flex flex-column'>
                    <div className='ourWorks-headerWrap d-flex flex-column flex-md-row align-items-md-center align-items-start'>
                        <div className='flex-grow-1'>
                            <h2 className='ourWorks-header mb-0'>Наши работы</h2>
                        </div>
                        <div className="arrows d-flex align-items-center">
                            <div className="swiper-button-prev">
                                <img src="/assets/img/ourWorks/arrow-left.svg"/>
                            </div>
                            <span>{activeSlide} / {slidesCount}</span>
                            <div className="swiper-button-next">
                                <img src="/assets/img/ourWorks/arrow-right.svg"/>
                            </div>
                        </div>
                    </div>

                    <Swiper slidesPerView={1}
                            spaceBetween={20}
                            modules={[Navigation, Pagination]}
                            navigation={{nextEl: '.ourWorks .swiper-button-next', prevEl: '.ourWorks .swiper-button-prev'}}
                            allowTouchMove={false}
                            loop={false}
                            onSlideChange={({activeIndex, slides})=> {updateCounts(activeIndex, slides.length)}}
                            onInit={({activeIndex, slides})=> {updateCounts(activeIndex, slides.length)}}
                    >
                        <SwiperSlide className='ourWorks-slide d-flex flex-column flex-lg-row-reverse flex-xl-row'>
                            <div className='compareWrap flex-grow-1 d-flex flex-column'>
                                <div className='compare'>
                                    <ReactCompareImage leftImage="/media/ourWorks/before-1.jpg"
                                                       rightImage="/media/ourWorks/after-1.jpg"
                                                       aspectRatio={'taller'}
                                                       sliderLineWidth={6}
                                                       sliderLineColor={'#F1F3FF'}
                                                       leftImageLabel='До'
                                                       rightImageLabel='После'
                                                       handle={<div className='compare-handler d-flex justify-content-center align-items-center'><img src="/assets/img/ourWorks/chevrons-left-right.svg" alt=""/></div>}
                                    />
                                </div>
                                <div className='person align-items-center d-none d-lg-flex d-xl-none'>
                                    <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                    <div className='person-text d-flex flex-column'>
                                        <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                        <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                    </div>
                                </div>
                            </div>
                            <div className='textWrap d-flex justify-content-lg-between flex-column flex-md-row'>
                                <div className='description flex-grow-1 d-flex flex-column d-lg-none d-xl-flex flex-column justify-content-between'>
                                    <div className='description-content d-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Жалобы пациента</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Пациентка обратилась с жалобами на изменение цвета центрального резца на верхней челюсти.</p>
                                        </div>
                                    </div>

                                    <div className='description-content d-none d-md-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Врач</p>
                                        </div>
                                        <div className='person d-flex align-items-center'>
                                            <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                            <div className='person-text d-flex flex-column'>
                                                <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                                <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <div className='btn btn-trnsp-dark'>Записаться</div>
                                    </div>
                                </div>
                                <div className='description flex-grow-1 d-flex flex-column justify-content-between'>
                                    <div className='description-content d-none d-lg-flex d-xl-none flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Жалобы пациента</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Пациентка обратилась с жалобами на изменение цвета центрального резца на верхней челюсти.</p>
                                        </div>
                                    </div>
                                    <div className='description-content d-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Процесс лечения</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>При осмотре полости рта, выявили небольшую пломбу с небной поверхности центрального резца. Приняли решение провести внутрикоронковое отбеливание.</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Определили исходный цвет депульпированного зуба. Провели внутрикоронковое отбеливание центрального резца препаратом Opalescence Endo Relif</p>
                                        </div>
                                    </div>
                                    <div className='description-content d-flex d-md-none flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Врач</p>
                                        </div>
                                        <div className='person d-flex align-items-center'>
                                            <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                            <div className='person-text d-flex flex-column'>
                                                <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                                <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <div className='btn btn-trnsp-dark'>Записаться</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='ourWorks-slide d-flex flex-column flex-lg-row-reverse flex-xl-row'>
                            <div className='compareWrap flex-grow-1 d-flex flex-column'>
                                <div className='compare'>
                                    <ReactCompareImage leftImage="/media/ourWorks/before-1.jpg"
                                                       rightImage="/media/ourWorks/after-1.jpg"
                                                       aspectRatio={'taller'}
                                                       sliderLineWidth={6}
                                                       sliderLineColor={'#F1F3FF'}
                                                       leftImageLabel='До'
                                                       rightImageLabel='После'
                                                       handle={<div className='compare-handler d-flex justify-content-center align-items-center'><img src="/assets/img/ourWorks/chevrons-left-right.svg" alt=""/></div>}
                                    />
                                </div>
                                <div className='person align-items-center d-none d-lg-flex d-xl-none'>
                                    <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                    <div className='person-text d-flex flex-column'>
                                        <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                        <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                    </div>
                                </div>
                            </div>
                            <div className='textWrap d-flex justify-content-lg-between flex-column flex-md-row'>
                                <div className='description flex-grow-1 d-flex flex-column d-lg-none d-xl-flex flex-column justify-content-between'>
                                    <div className='description-content d-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Жалобы пациента</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Пациентка обратилась с жалобами на изменение цвета центрального резца на верхней челюсти.</p>
                                        </div>
                                    </div>

                                    <div className='description-content d-none d-md-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Врач</p>
                                        </div>
                                        <div className='person d-flex align-items-center'>
                                            <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                            <div className='person-text d-flex flex-column'>
                                                <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                                <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <div className='btn btn-trnsp-dark'>Записаться</div>
                                    </div>
                                </div>
                                <div className='description flex-grow-1 d-flex flex-column justify-content-between'>
                                    <div className='description-content d-none d-lg-flex d-xl-none flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Жалобы пациента</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Пациентка обратилась с жалобами на изменение цвета центрального резца на верхней челюсти.</p>
                                        </div>
                                    </div>
                                    <div className='description-content d-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Процесс лечения</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>При осмотре полости рта, выявили небольшую пломбу с небной поверхности центрального резца. Приняли решение провести внутрикоронковое отбеливание.</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Определили исходный цвет депульпированного зуба. Провели внутрикоронковое отбеливание центрального резца препаратом Opalescence Endo Relif</p>
                                        </div>
                                    </div>
                                    <div className='description-content d-flex d-md-none flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Врач</p>
                                        </div>
                                        <div className='person d-flex align-items-center'>
                                            <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                            <div className='person-text d-flex flex-column'>
                                                <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                                <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <div className='btn btn-trnsp-dark'>Записаться</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='ourWorks-slide d-flex flex-column flex-lg-row-reverse flex-xl-row'>
                            <div className='compareWrap flex-grow-1 d-flex flex-column'>
                                <div className='compare'>
                                    <ReactCompareImage leftImage="/media/ourWorks/before-1.jpg"
                                                       rightImage="/media/ourWorks/after-1.jpg"
                                                       aspectRatio={'taller'}
                                                       sliderLineWidth={6}
                                                       sliderLineColor={'#F1F3FF'}
                                                       leftImageLabel='До'
                                                       rightImageLabel='После'
                                                       handle={<div className='compare-handler d-flex justify-content-center align-items-center'><img src="/assets/img/ourWorks/chevrons-left-right.svg" alt=""/></div>}
                                    />
                                </div>
                                <div className='person align-items-center d-none d-lg-flex d-xl-none'>
                                    <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                    <div className='person-text d-flex flex-column'>
                                        <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                        <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                    </div>
                                </div>
                            </div>
                            <div className='textWrap d-flex justify-content-lg-between flex-column flex-md-row'>
                                <div className='description flex-grow-1 d-flex flex-column d-lg-none d-xl-flex flex-column justify-content-between'>
                                    <div className='description-content d-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Жалобы пациента</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Пациентка обратилась с жалобами на изменение цвета центрального резца на верхней челюсти.</p>
                                        </div>
                                    </div>

                                    <div className='description-content d-none d-md-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Врач</p>
                                        </div>
                                        <div className='person d-flex align-items-center'>
                                            <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                            <div className='person-text d-flex flex-column'>
                                                <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                                <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <div className='btn btn-trnsp-dark'>Записаться</div>
                                    </div>
                                </div>
                                <div className='description flex-grow-1 d-flex flex-column justify-content-between'>
                                    <div className='description-content d-none d-lg-flex d-xl-none flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Жалобы пациента</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Пациентка обратилась с жалобами на изменение цвета центрального резца на верхней челюсти.</p>
                                        </div>
                                    </div>
                                    <div className='description-content d-flex flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Процесс лечения</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>При осмотре полости рта, выявили небольшую пломбу с небной поверхности центрального резца. Приняли решение провести внутрикоронковое отбеливание.</p>
                                        </div>
                                        <div className='description-text'>
                                            <p className='mb-0'>Определили исходный цвет депульпированного зуба. Провели внутрикоронковое отбеливание центрального резца препаратом Opalescence Endo Relif</p>
                                        </div>
                                    </div>
                                    <div className='description-content d-flex d-md-none flex-column'>
                                        <div className='description-header'>
                                            <p className='mb-0'>Врач</p>
                                        </div>
                                        <div className='person d-flex align-items-center'>
                                            <div className='person-avatar' style={{backgroundImage: 'url(/media/employeesSlider/2.jpg)'}}/>
                                            <div className='person-text d-flex flex-column'>
                                                <p className='person-text-position mb-0'>Врач-ортодонт</p>
                                                <p className='person-text-name mb-0'>Иванова Алекснадра</p>
                                            </div>
                                        </div>
                                        <div className='btn btn-trnsp-dark'>Записаться</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}