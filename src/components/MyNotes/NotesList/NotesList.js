import React from 'react';

import NoteItem from "./NoteItem/NoteItem";

const NotesList = ({notes, changeFieldValue, deleteNote, disabled}) => {
    return(
        <div>
            {Object.keys(notes).filter(filename => notes[filename]).map(filename => <NoteItem
                filename={filename}
                note={notes[filename]}
                changeFieldValue={changeFieldValue}
                key={filename}
                deleteNote={deleteNote}
                disabled={disabled}
            />)}
        </div>
    )
}

export default NotesList