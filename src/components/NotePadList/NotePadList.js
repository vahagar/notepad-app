import React from 'react'

import NotePadListItem from './NotePadListItem/NotaPadListItem'

const NotePadList = () => {
    return (
        <div>
            <h2> NotePad List Component </h2>
            <NotePadListItem id={1} title={'NotePad 1'}/>
            <NotePadListItem id={2} title={'NotePad 2'}/>
            <NotePadListItem id={3} title={'NotePad 3'}/>

        </div>
    )
}

export default NotePadList