import React from 'react';
import {useParams} from 'react-router-dom'
import MyNotes from "../../MyNotes/MyNotes";
import Button from "../../reusables/Button/Button";

import classes from './NotePadItem.module.css'

const NotePadItem = (props) => {
    const {id} = useParams();
    return (
        <div>
            <div className='flex items-end content-between wrap notepad-item-header'>
                <div className={`flex column ${classes['title-container']}`}>
                    <label htmlFor={`note-pad-title`}>Notepad Title</label>
                    <input type="text"
                           id={`note-pad-title`}
                           placeholder='My notepad title...'
                           className={classes.title}
                    />
                </div>
                <div className='mt-10'>
                    <Button title='Save' type='save' style={{marginRight: '10px'}}/>
                    <Button title='Delete' type='delete' />
                </div>
            </div>
            <MyNotes />
        </div>
    )
}

export default NotePadItem