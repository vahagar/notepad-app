import React from 'react';

import NoteItem from "./NoteItem/NoteItem";

const NotesList = () => {
    return(
        <div>
            <h2>Notes List Component</h2>
            <NoteItem />
            <NoteItem />
            <NoteItem />
        </div>
    )
}

export default NotesList