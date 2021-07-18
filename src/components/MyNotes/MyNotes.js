import React from 'react';
import NotesList from "./NotesList/NotesList";
import AddNote from "./AddNote/AddNote";

import classes from './MyNotes.module.css'

const MyNotes = ({notes, changeFieldValue, addNote, deleteNote, disabled}) => {
    return(
        <div className={classes.my_notes}>
            <div className='h2'>My Notes</div>
            <AddNote classes={classes} changeFieldValue={changeFieldValue} addNote={addNote} disabled={disabled}/>
            <NotesList classes={classes}
                       notes={notes}
                       changeFieldValue={changeFieldValue}
                       deleteNote={deleteNote}
                       disabled={disabled}
            />
        </div>
    )
}

export default MyNotes