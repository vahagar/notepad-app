import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';

import NotePadListItem from './NotePadListItem/NotaPadListItem'
import {useDispatch, useSelector} from "react-redux";
import {getNotePadListAction} from '../../store/actions/notePadActions'
import Button from "../reusables/Button/Button";

const NotePadList = () => {
    const dispatch = useDispatch();
    const [list, listById] = useSelector(state => ([state.notePad.list, state.notePad.listById]))

    let history = useHistory()

    useEffect(() => {
        dispatch(getNotePadListAction())
    }, [dispatch])

    const createNotePad = () => {
        history.push('/create')
    }

    return (
        <div>
            <div className='flex items-center content-between'>
                <h2> NotePad List Component </h2>
                <Button type='add' title='Create Notepad' onClick={createNotePad}/>
            </div>
            {list.map(id => {
                return <NotePadListItem id={id} title={listById[id].description} key={id}/>
            })}
        </div>
    )
}

export default NotePadList
