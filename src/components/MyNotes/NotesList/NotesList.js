import React from 'react';

import NoteItem from "./NoteItem/NoteItem";

const NotesList = ({notes, changeFieldValue, deleteNote}) => {
    return(
        <div>
            {Object.keys(notes).map(filename => <NoteItem
                filename={filename}
                note={notes[filename]}
                changeFieldValue={changeFieldValue}
                key={filename}
                deleteNote={deleteNote}
            />)}
        </div>
    )
}

export default NotesList