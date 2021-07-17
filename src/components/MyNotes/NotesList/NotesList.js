import React from 'react';

import NoteItem from "./NoteItem/NoteItem";

const NotesList = ({notes, changeFieldValue}) => {
    return(
        <div>
            {Object.keys(notes).map(filename => <NoteItem
                filename={filename}
                note={notes[filename]}
                changeFieldValue={changeFieldValue}
                key={filename}
            />)}
        </div>
    )
}

export default NotesList