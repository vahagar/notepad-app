import React from 'react';

import InputTextarea from '../../../reusables/InputTextarea/InputTextarea';
import Button from "../../../reusables/Button/Button";

import classes from './NoteItem.module.css';

const NoteItem = ({note, changeFieldValue, filename, deleteNote, disabled}) => {
    return(
        <div className={classes.item_wrapper}>
            <InputTextarea
                style={{marginRight: '10px'}}
                title={note.filename}
                desc={note.content}
                filename={filename}
                changeFieldValue={changeFieldValue}
                disabled={disabled}
            />
            <div>
                <Button type='delete' title='Delete'
                        style={{marginTop: '8px'}}
                        onClick={() => deleteNote(filename)}
                        disabled={disabled}
                />
            </div>
        </div>
    )
}

export default NoteItem