import React, {useState} from 'react'
import cn from 'classnames'


const Tabs = ({tabs}) => {
    const [selectedTabId, setSelectedTabId] = useState(tabs?.[0]?.id)

    const selectHandler = (id) => {
        setSelectedTabId(id)
    }

    const currentComponent = tabs.find(({id}) => id === selectedTabId)?.component

    return (
        <div className='services-content d-flex flex-column'>
            <div className='services-tabs d-flex align-items-center'>
                {
                    tabs.map(({id, text}) => <h1 className={cn(['services-tabs-el', {active: id === selectedTabId}])}
                                                 onClick={() => selectHandler(id)} key={id}>{text}</h1>)
                }
            </div>
            {currentComponent}
        </div>
    )
}

export default Tabs
