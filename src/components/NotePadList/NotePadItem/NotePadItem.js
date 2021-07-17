import React from 'react';
import {useParams} from 'react-router-dom'

import NotesList from '../../NotesList/NotesList'

const NotePadItem = (props) => {
    const {id} = useParams();
    return (
        <div>
            <h2> NotePad Item Component {id}</h2>
            <NotesList />
        </div>
    )
}

export default NotePadItem