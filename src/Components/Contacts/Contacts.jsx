import React, {useEffect, useRef, useState} from 'react';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {debounce} from "../../Functions/debounce";

export default function Contacts(){
    const debounceMapChangeRef = useRef();
    const mapContainer = useRef();

    const map992 = {
        center: [54.773612, 56.079053],
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"],
    }

    const map768 = {
        center: [54.774710, 56.078815],
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"],
    }

    const map320 = {
        center: [54.773468, 56.082293],
        zoom: 17,
        controls: ["zoomControl", "fullscreenControl"],
    }

    const [currPreset, setCurrPreset] = useState(map992);

    const changePreset = ()=>{
        let width = mapContainer.current.offsetWidth;

        if(width >= 992){
            setCurrPreset(map992);
        }

        if(width >= 768 && width < 992){
            setCurrPreset(map768);
        }

        if(width >= 320 && width < 768){
            setCurrPreset(map320);
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            debounce(changePreset, 300, debounceMapChangeRef);
        });
        changePreset();
        return (()=>{debounce(changePreset, 300, debounceMapChangeRef);})
    }, [])

    return (
        <section className='contactsBlock'>
            <div className="container">
                <div className='contactsBlock-mapWrap'>
                    <div className='contactsBlock-map d-flex' ref={mapContainer}>
                        <YMaps>
                            <Map defaultState={map992}
                                 state={currPreset}
                                 modules={["control.ZoomControl", "control.FullscreenControl"]}
                                 width={'100%'}
                                 height={'unset'}
                                 className='flex-grow-1'
                            >
                                <Placemark geometry={[54.773893, 56.082325]}
                                           options={{iconLayout: 'default#image',
                                               iconImageHref: '/assets/img/contactsBlock/placemark.svg',
                                               iconImageSize: [94, 94],
                                               iconImageOffset: [-47, -97]
                                           }}/>
                            </Map>
                        </YMaps>
                    </div>
                    <div className='contactsBlock-info d-flex flex-column'>
                        <div>
                            <p className='contactsBlock-info-header mb-0'>AB Clinic в Сипайлово</p>
                        </div>
                        <div>
                            <p className='contactsBlock-info-contact mb-0'>Уфа, ул. Академика Королева, 24</p>
                        </div>
                        <div>
                            <a href="tel:+79171234567">
                                <div>
                                    <p className='contactsBlock-info-contact mb-0'>+7 917 123 45 67</p>
                                </div>
                            </a>
                        </div>
                        <div>
                            <p className='contactsBlock-info-time mb-0'>Открыто с 10:00 до 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}