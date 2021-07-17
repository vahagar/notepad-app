import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";


import MyNotes from "../../MyNotes/MyNotes";
import Button from "../../reusables/Button/Button";

import classes from './NotePadItem.module.css'
import {getNotePadAction} from "../../../store/actions/notePadActions";

const NotePadItem = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const notePadItem = useSelector(state => state.notePad.listById[id]);
    const [title, setTitle] = useState(notePadItem?.description || '');

    const [notes, setNotes] = useState({})

    const changeFieldValue = (fileName, key, value) => {
        const f = {...notes[fileName]};
        f[key] = value
        const n = {...notes};
        n[fileName] = f;
        console.log(n)
        setNotes(n)
    }

    useEffect(() => {
        if(notePadItem){
            setTitle(notePadItem?.description)
            setNotes(notePadItem.files)
        }
    }, [notePadItem])

    useEffect(() => {
        if(id){
            dispatch(getNotePadAction(id))
        }
    }, [id, dispatch])

    if(!notePadItem){
        return <h1 style={{color: 'red'}}>Notepad not found</h1>
    }


    return (
        <div>
            <div className='flex items-end content-between wrap notepad-item-header'>
                <div className={`flex column ${classes['title-container']}`}>
                    <label htmlFor={`note-pad-title`}>Notepad Title</label>
                    <input type="text"
                           id={`note-pad-title`}
                           placeholder='My notepad title...'
                           className={classes.title}
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='mt-10'>
                    <Button title='Save' type='save' style={{marginRight: '10px'}}/>
                    <Button title='Delete' type='delete' />
                </div>
            </div>

            <MyNotes notes={notes} changeFieldValue={changeFieldValue}/>
        </div>
    )
}

export default NotePadItem