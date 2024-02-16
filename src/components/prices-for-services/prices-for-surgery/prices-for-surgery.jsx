import useDebounce from '@hooks/use-debounce.js'
import {useGetServiceFilteredQuery, useGetServicesFiltersQuery} from '@store/modules/services-api.js'
import cn from 'classnames'
import React, {useMemo, useState} from 'react'

import Filters from '@ui/filters/index.js'

import cl from '../prices.module.scss'

const PricesForSurgery = () => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [search, setSearch] = useState('')

    const debouncedSearch = useDebounce(search, 300)

    const {data: filters = []} = useGetServicesFiltersQuery('Хирургия')
    const {data: services = {data: []}} = useGetServiceFilteredQuery({
        search: debouncedSearch,
        service: 'Хирургия',
        subServices: selectedFilters
    })

    const pricesList = useMemo(
        () =>
            (services.status !== 'false' ? services.data : []).map(({sub_name, items}, index) => ({
                id: index,
                title: sub_name,
                item: items.map(({name, price}, itemIndex) => ({
                    id: itemIndex,
                    service: name,
                    cost: `${price} ₽`
                }))
            })),
        [services.data]
    )

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={cl.prices}>
            <div className="container">
                <h1 className={cn([cl.pricesTitle, 'd-flex', 'mb-0'])}>Услуги по лечению зубов</h1>
                <div className={cl.pricesContent}>
                    <Filters filters={filters} selectedFilters={selectedFilters} onChange={setSelectedFilters}/>

                    <div className={cn([cl.inputWrapper])}>
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            className={cl.input}
                            placeholder="Поиск по услугам"
                        />
                    </div>
                    <div
                        className={`${cl.pricesContentList} ${isOpen || services.total_count === undefined ? 'gap-0' : ''}`}>
                        {isOpen ? (
                            <div className={cl.blocks}>
                                {pricesList.map(({title, id, item}) => (
                                    <div key={id} className={cl.block}>
                                        <h1 className={cn([cl.title, 'd-flex', 'mb-0'])}>{title}</h1>
                                        <div className={cn([cl.informationLines, 'd-flex', 'flex-column'])}>
                                            {item.map(({service, cost}) => (
                                                <div className={cn([cl.information, 'd-flex'])}>
                                                    <h1 className={cl.service}>{service}</h1>
                                                    <span className={cl.cost}>{cost}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={cl.blocks}>
                                {pricesList.slice(0, 1).map(({title, id, item}) => (
                                    <div key={id} className={cl.block}>
                                        <h4 className={cn([cl.title, 'd-flex', 'mb-0'])}>{title}</h4>
                                        <div className={cn([cl.informationLines, 'd-flex', 'flex-column'])}>
                                            {item.slice(0, 6).map(({service, cost}) => (
                                                <div className={cn([cl.information, 'd-flex'])}>
                                                    <span className={cl.service}>{service}</span>
                                                    <span className={cl.cost}>{cost}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div>
                            {services.total_count === undefined ? (
                                <div className={cl.notFound}>Ничего не найдено</div>
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <button onClick={() => setIsOpen(!isOpen)}
                                            className={`${cl.btn} ${isOpen ? cl.btnclose : ''}`}>
                                        {`+${services?.total_count || 0}`}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricesForSurgery
