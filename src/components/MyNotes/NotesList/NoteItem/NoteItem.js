import React from 'react';

import InputTextarea from '../../../reusables/InputTextarea/InputTextarea';
import Button from "../../../reusables/Button/Button";

import classes from './NoteItem.module.css';

const NoteItem = () => {
    return(
        <div className={classes.item_wrapper}>
            <InputTextarea style={{marginRight: '10px'}}/>
            <div>
                <Button type='delete' title='Delete' style={{marginTop: '8px'}}/>
            </div>
        </div>
    )
}

export default NoteItem