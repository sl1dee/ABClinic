import Filters from '@components/doctors-container/filters/index.js'
import useDebounce from '@hooks/use-debounce.js'
import { useGetDoctorFilteredQuery, useGetDoctorFiltersQuery } from '@store/modules/doctors-api.js'
import cn from 'classnames'
import React, { useMemo, useState } from 'react'
import {Link} from 'react-router-dom'

import cl from './doctors-container.module.scss'

const DoctorsContainer = () => {
  const [search, setSearch] = useState('')
  const [selectedFilters, setSelectedFilters] = useState([])
  const [selectedDirections, setSelectedDirections] = useState([])

  const debouncedSearch = useDebounce(search, 300)

  const { data: filters = [] } = useGetDoctorFiltersQuery();
  const { data: doctors = [] } = useGetDoctorFilteredQuery({ search: debouncedSearch, directions: selectedDirections, specialities: selectedFilters });

    return (
        <div className={cl.doctorsContainer}>
            <div className="container">
                <div className={cl.titleWrapper}>
                    <h1 className={cl.title}>Врачи</h1>
                    <div className={cn([cl.inputWrapper])}>
                        <input value={search} onChange={(event) => setSearch(event.target.value)} className={cl.input} placeholder='Поиск по врачам'/>
                    </div>
                </div>
                <Filters directions={filters?.directions} filters={filters?.specialities} selectedFilters={selectedFilters} onDirectionsChange={setSelectedDirections} onFiltersChange={setSelectedFilters}/>
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
                                      {price && <p className={cn([cl.infoTextPrice, 'mb-0'])}>от {price} ₽</p>}
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
