import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleMakeRecordModal} from "../../store/actions/makeRecordModal/makeRecordModal";

export default function Sidebar(props) {
    const dispatch = useDispatch();

    return (
        <div className={`sidebar${props.isOpen? ' open' : ''}`}>
            <div className='sidebar-bckg' onClick={()=>props.toggle(false)} title='Закрыть'/>
            <div className='sidebar-content d-flex flex-column justify-content-md-between h-100'>
                <div className='closer d-flex align-items-center justify-content-center' onClick={()=>props.toggle(false)} title='Закрыть'/>

                <div className='menu d-flex flex-column'>
                    <div className='menu-logo'>
                        <img src="/assets/img/logos/logo_b_hor.svg" alt="GiGas"/>
                    </div>
                    <div className='menu-links d-flex flex-column'>
                        <Link to='/'><div><p className='menu-links_header mb-0'>Услуги</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Лечение зубов</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Имплантация</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Хирургия</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Брекеты, элайнеры</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Лечение дёсен</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Профессиональная гигиена</p></div></Link>
                    </div>
                    <div className='menu-links d-flex flex-column'>
                        <Link to='/'><div><p className='menu-links_header mb-0'>Направления</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Взрослое</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Детское</p></div></Link>
                    </div>
                    <div className='menu-links d-flex flex-column'>
                        <Link to='/'><div><p className='menu-links_header mb-0'>Врачи</p></div></Link>
                    </div>
                    <div className='menu-links d-flex flex-column'>
                        <Link to='/'><div><p className='menu-links_header mb-0'>О клинике</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Контакты</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Акции</p></div></Link>
                        <Link to='/'><div><p className='menu-links_link mb-0'>Блог</p></div></Link>
                    </div>
                </div>

                <div className='contacts d-flex flex-column'>
                    <div className='contacts-info d-flex flex-column'>
                        <div className='contacts-info_link d-flex align-items-center'>
                            <div><img src="/assets/img/sidebar/loc.svg" alt=""/></div>
                            <div><p className='mb-0'>Уфа, ул. Академика Королева, 24</p></div>
                        </div>
                        <a href="tel:+79171234567">
                            <div className='contacts-info_link d-flex align-items-center'>
                                <div><img src="/assets/img/sidebar/phone.svg" alt=""/></div>
                                <div><p className='mb-0'>+7 917 123-45-67</p></div>
                            </div>
                        </a>
                        <div className='contacts-info_time'>
                            <p className='mb-0'>Открыто с 10:00 до 21:00</p>
                        </div>
                    </div>
                    <div className='btn btn-trnsp-dark' onClick={()=>{dispatch(toggleMakeRecordModal(true));props.toggle(false)}}>Записаться</div>
                </div>

            </div>
        </div>
    )
}