import React from 'react';
import NotesList from "./NotesList/NotesList";
import AddNote from "./AddNote/AddNote";

import classes from './MyNotes.module.css'

const MyNotes = () => {
    return(
        <div className={classes.my_notes}>
            <div className='h2'>My Notes</div>
            <AddNote classes={classes}/>
            <NotesList classes={classes}/>

        </div>
    )
}

export default MyNotes