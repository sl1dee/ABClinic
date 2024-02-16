import React from 'react';

export default function Favorites(props) {

    return (
        <section className='favorites'>
            <div className='container d-flex flex-column'>
                <div>
                    <h1 className='mb-0 favorites-header'>{props.favorites.header}</h1>
                </div>
                <div className='favorites-content'>
                    {
                        props.favorites.items.map((item, i) =>
                            <div
                                className={`favorites-content-el d-flex flex-column flex-md-row-reverse flex-lg-column justify-content-between justify-content-md-end justify-content-lg-between${item?.dark ? ' dark' : ''}`}
                                key={i}>
                                <div className='text d-flex flex-column'>
                                    <h1 className='text-header mb-0'>{item.header}</h1>
                                    <p className='text-description mb-0'>{item.description}</p>
                                </div>
                                <div className='photo'>
                                    <img src={item.photo} alt=""/>
                                </div>
                            </div>
                        )
                    }
                    <div className='onlyImage'><img src={props.favorites.image1} alt=""/></div>
                    <div className='onlyImage d-none d-md-block d-lg-none'><img src={props.favorites.image2} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}