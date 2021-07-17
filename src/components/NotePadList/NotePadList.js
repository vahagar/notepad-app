import React, {useEffect} from 'react'

import NotePadListItem from './NotePadListItem/NotaPadListItem'
import {useDispatch, useSelector} from "react-redux";
import {getNotePadListAction} from '../../store/actions/notePadActions'

const NotePadList = () => {
    const dispatch = useDispatch();
    const [list, listById] = useSelector(state => ([state.notePad.list,state.notePad.listById]))

    useEffect(() => {
        dispatch(getNotePadListAction())
    }, [dispatch])

    return (
        <div>
            <h2> NotePad List Component </h2>
            {list.map(id => {
                return <NotePadListItem id={id} title={listById[id].description} key={id}/>
            })}
        </div>
    )
}

export default NotePadList

// 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Inspector