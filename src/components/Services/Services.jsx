import React, {useState} from 'react';

export default function Services(props){
    const [activeServiceTab, setActiveServiceTab] = useState(0);

    return (
        <section className='services'>
            <div className='container d-flex flex-column'>
                {
                    props?.preHeader
                        ? <div className='services-preHeader'>
                            <p className='mb-0'>Выберите направление услуг</p>
                        </div>
                        : false
                }
                <div className='services-content d-flex flex-column'>
                    <div className='services-tabs d-flex align-items-center'>
                        {
                            props.services.length === 1
                                ? <div className='services-tabs-el single'>{props.services[0].header}</div>
                                : props.services.map((service, index)=><div className={`services-tabs-el${index === activeServiceTab ? ' active' : ''}`} onClick={()=>setActiveServiceTab(index)} key={index}>{service.header}</div>)
                        }
                    </div>
                    {
                        props.services.map((service, contentIndex)=>
                            <div key={`c${contentIndex}`} className={`services-tabsContent${contentIndex === activeServiceTab ? ' d-grid' : ' d-none'}`}>
                                {service.items.map((item, itemIndex)=>{
                                    return(
                                        item?.image
                                            ? <div className='onlyImage' key={itemIndex}><img src={item?.image} alt=""/></div>
                                            : <div className='d-flex flex-column justify-content-between' key={`s${itemIndex}`}>
                                                <div className='d-flex flex-column text'>
                                                    <h2 className='mb-0'>{item.header}</h2>
                                                    <p className='mb-0'>{item.description}</p>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='badge'><span>{item.badge}</span></div>
                                                </div>
                                        </div>
                                    )
                                })}
                                {
                                    service?.additionalImage && <div className='additionalImage d-none d-md-block'><img src={service?.additionalImage} alt=""/></div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}