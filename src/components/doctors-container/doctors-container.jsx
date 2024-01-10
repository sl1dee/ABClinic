import Filters from '@components/doctors-container/filters/index.js'
import { useGetDoctorFilteredQuery, useGetDoctorFiltersQuery } from '@store/modules/doctors-api.js'
import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import {Link} from 'react-router-dom'

import cl from './doctors-container.module.scss'

const DoctorsContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState([])

  const { data: filters = [] } = useGetDoctorFiltersQuery({ directions: [], specialities: [] });
  const { data: doctors = [] } = useGetDoctorFilteredQuery({ directions: [], specialities: selectedFilters });

    return (
        <div className={cl.doctorsContainer}>
            <div className="container">
                <div className={cl.titleWrapper}>
                    <h1 className={cl.title}>Врачи</h1>
                    {/*<div className={cn([cl.inputWrapper])}>*/}
                    {/*    <input className={cl.input} placeholder='Поиск по врачам'/>*/}
                    {/*</div>*/}
                </div>
                <Filters filters={filters} selectedFilters={selectedFilters} onChange={setSelectedFilters}/>
                <div className={cl.doctorsCards}>
                    {doctors?.map(({id,
                      image,
                      name,
                      direction,
                      price,
                      speciality}) => (
                        <div key={id} className={cn([cl.employeesSlider, cl.employeesSliderSlide])}>
                            <Link to={`/doctor/${id}`}>
                                <div className={cl.photo}>
                                    <img src={image} alt=""/>
                                </div>

                                <div className={cn([cl.info, 'd-flex', 'flex-column', 'justify-content-between'])}>
                                    <div className={cn([cl.infoText, 'd-flex', 'flex-column'])}>
                                        <p className={cn([cl.infoTextName, 'mb-0'])}>{name}</p>
                                      {speciality.map(({name: specialityName}) => <p className={cn([cl.infoTextPosition, 'mb-0'])}>{specialityName}</p>)}
                                      {price && <p className={cn([cl.infoTextPrice, 'mb-0'])}>от {price} ₽</p>}
                                      {direction.map(({name: directionName}) => <p className={cn([cl.infoTextBadge, 'mb-0'])}>{directionName}</p>)}
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
