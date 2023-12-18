import React from 'react';

export default function Articles(){

    return (
        <section className='articles'>
            <div className='container d-flex flex-column'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h2 className='mb-0 articles-header'>Полезные статьи</h2>
                    <div className='btn btn-trnsp-dark d-none d-md-block'>Все статьи</div>
                </div>
                <div className='articles-content'>
                    <div className='articles-content-el d-flex d-md-none d-lg-flex flex-column flex-md-row-reverse flex-lg-column justify-content-between justify-content-md-end justify-content-lg-between'>
                        <div className='photo'>
                            <img src='/media/articles/1.jpg' alt=""/>
                        </div>
                        <div className='text d-flex flex-column'>
                            <p className='text-date mb-0'>11.11.23</p>
                            <p className='text-header mb-0'>Как научить ребенка чистить зубы?</p>
                        </div>
                    </div>
                    <div className='articles-content-el d-flex flex-column flex-md-row-reverse flex-lg-column justify-content-between justify-content-md-end justify-content-lg-between'>
                        <div className='photo'>
                            <img src='/media/articles/1.jpg' alt=""/>
                        </div>
                        <div className='text d-flex flex-column'>
                            <p className='text-date mb-0'>11.11.23</p>
                            <p className='text-header mb-0'>Как научить ребенка чистить зубы?</p>
                        </div>
                    </div>
                    <div className='articles-content-el d-flex flex-column flex-md-row-reverse flex-lg-column justify-content-between justify-content-md-end justify-content-lg-between'>
                        <div className='photo'>
                            <img src='/media/articles/2.jpg' alt=""/>
                        </div>
                        <div className='text d-flex flex-column'>
                            <p className='text-date mb-0'>11.11.23</p>
                            <p className='text-header mb-0'>Как научить ребенка чистить зубы?</p>
                        </div>
                    </div>
                </div>
                <div className='btn btn-trnsp-dark d-md-none'>Все статьи</div>
            </div>
        </section>
    )
}