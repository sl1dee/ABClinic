import cn from 'classnames'
import React, {useMemo} from 'react'
import {Link} from 'react-router-dom'

import cl from './doctors-container.module.scss'

const DoctorsContainer = () => {
    const doctorsList = useMemo(
        () => [
            {
                id: 0,
                img: '/media/employeesSlider/aliya.jpg',
                name: 'Алия Беглова',
                href: '/doctor/12',
                qualification: 'Врач-ортодонт',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Ортодонт'
            },
            {
                id: 1,
                img: '/media/employeesSlider/nasima.jpg',
                name: 'Насима Шагаева',
                qualification: 'Врач-стоматолог-ортопед',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Стоматолог-ортопед'
            },
            {
                id: 2,
                img: '/media/employeesSlider/eliza.jpg',
                name: 'Элиза Мигранова',
                qualification: 'Врач-стоматолог-терапевт',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Стоматолог-терапевт'
            },
            {
                id: 3,
                img: '/media/employeesSlider/almaz.jpg',
                name: 'Алмаз Гафурьянов',
                qualification: 'Врач-гигиенист',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Гигиенист'
            },
            {
                id: 4,
                img: '/media/employeesSlider/adel.jpg',
                name: 'Адель Ахметова',
                qualification: 'Врач-стоматолог-ортодонт',
                price: 'от 2500',
                information: 'Детский врач',
                category: 'Стоматолог-ортодонт'
            },
            {
                id: 5,
                img: '/media/employeesSlider/timur.jpg',
                name: 'Тимур Ишмухаметов',
                qualification: 'Стоматолог общей практики',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Стоматолог общей практики'
            },
            {
                id: 6,
                img: '/media/employeesSlider/ilgiz.jpg',
                name: 'Ильгиз Каримов',
                qualification: 'Врач-стоматолог-терапевт',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Стоматолог-терапевт'
            },
            {
                id: 7,
                img: '/media/employeesSlider/aliya.jpg',
                name: 'Сединкин Евгений',
                qualification: 'Врач-стоматолог-ортопед',
                price: 'от 2500',
                information: 'Взрослый врач',
                category: 'Стоматолог-ортопед'
            },
            {
                id: 8,
                img: '/media/employeesSlider/alena.jpg',
                name: 'Алена Исламгалеева',
                qualification: 'Главная медсестра',
                price: 'от 2500',
                information: 'Главная медсестра',
                // category: 'Главная медсестра'
            },
            {
                id: 9,
                img: '/media/employeesSlider/elvira.jpg',
                name: 'Эльвира Яхина',
                qualification: 'Администратор',
                price: 'от 2500',
                information: 'Администратор',
                // category: 'Администратор'
            }
        ],
        []
    )


    return (
        <div className={cl.doctorsContainer}>
            <div className="container">
                <div className={cl.titleWrapper}>
                    <h1 className={cl.title}>Врачи</h1>
                    {/*<div className={cn([cl.inputWrapper])}>*/}
                    {/*    <input className={cl.input} placeholder='Поиск по врачам'/>*/}
                    {/*</div>*/}
                </div>
                {/*<Filters/>*/}
                <div className={cl.doctorsCards}>
                    {doctorsList?.map(({id, href, img, name, qualification, price, information}) => (
                        <div key={id} className={cn([cl.employeesSlider, cl.employeesSliderSlide])}>
                            <Link to={href}>
                                <div className={cl.photo}>
                                    <img src={img} alt=""/>
                                </div>

                                <div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                    <div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
                                        <p className={cn([cl.infoTextName, 'mb-0'])}>{name}</p>
                                        <p className={cn([cl.infoTextPosition, 'mb-0'])}>{qualification}</p>
                                        <p className={cn([cl.infoTextPrice, 'mb-0'])}>{price}</p>
                                        <p className={cn([cl.infoTextBadge, 'mb-0'])}>{information}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoctorsContainer
