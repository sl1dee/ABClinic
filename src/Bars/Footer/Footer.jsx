import React from "react";
import {Link} from "react-router-dom";

export default function Footer(){
    return <footer className='footer'>
        <div className='container d-flex flex-column'>
            <div className='footer-content w-100 d-flex flex-column flex-md-row align-items-start justify-content-between'>
                <div className='footer-logo'>
                    <img src="/assets/img/logos/logo_w.svg" alt=""/>
                </div>
                <div className='footer-contacts d-flex flex-column'>
                    <div className='footer-contacts-el d-flex flex-column'>
                        <div>
                            <p className='label mb-0'>Свяжитесь с нами</p>
                        </div>
                        <div>
                            <a href="tel:+79171234567">
                                <p className='contact mb-0'>+7 917 123 45 67</p>
                            </a>
                        </div>
                    </div>
                    <div className='footer-contacts-el d-flex flex-column'>
                        <div>
                            <p className='label mb-0'>Адрес клиники</p>
                        </div>
                        <div>
                            <p className='contact mb-0'>Уфа, ул. Академика Королева, 24</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='btn btn-white-trnsp'>Записаться на прием</div>
                    </div>
                </div>
                <div className='footer-links d-flex flex-column'>
                    <div><Link to='/'><p className='mb-0'>Услуги</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Взрослое направление</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Детское направление</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Врачи</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Наши работы</p></Link></div>
                    <div className='d-block d-lg-none'><Link to='/'><p className='mb-0'>Акции</p></Link></div>
                    <div className='d-block d-lg-none'><Link to='/'><p className='mb-0'>Блог</p></Link></div>
                    <div className='d-block d-lg-none'><Link to='/'><p className='mb-0'>О компании</p></Link></div>
                    <div className='d-block d-lg-none'><Link to='/'><p className='mb-0'>Контакты</p></Link></div>
                    <div className='d-block d-lg-none'><Link to='/'><p className='mb-0'>Отзывы</p></Link></div>
                </div>
                <div className='footer-links d-none d-lg-flex flex-column'>
                    <div><Link to='/'><p className='mb-0'>Акции</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Блог</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>О компании</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Контакты</p></Link></div>
                    <div><Link to='/'><p className='mb-0'>Отзывы</p></Link></div>
                </div>
            </div>
            <div className='footer-bottom d-flex flex-column flex-column flex-md-row align-items-start align-items-md-center justify-content-between'>
                <div>
                    <Link to='/'>
                        <div>
                            <p className='footer-bottom-link mb-0'>Правовая информация</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <a href='https://ambity.ru'>
                        <div>
                            <p className='footer-bottom-link mb-0'>Дизайн и разработка сайта: Амбити</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
}