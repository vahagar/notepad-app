import React from 'react';
import NotesList from "./NotesList/NotesList";
import AddNote from "./AddNote/AddNote";

import classes from './MyNotes.module.css'

const MyNotes = ({notes, changeFieldValue}) => {
    return(
        <div className={classes.my_notes}>
            <div className='h2'>My Notes</div>
            <AddNote classes={classes}/>
            <NotesList classes={classes} notes={notes} changeFieldValue={changeFieldValue}/>
        </div>
    )
}

export default MyNotes