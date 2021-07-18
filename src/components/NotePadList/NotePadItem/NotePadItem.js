import React, {useEffect, useState} from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";


import MyNotes from "../../MyNotes/MyNotes";
import Button from "../../reusables/Button/Button";

import classes from './NotePadItem.module.css'
import {
    createNotePadAction,
    deleteNotePadAction,
    getNotePadAction,
    updateNotePadAction
} from "../../../store/actions/notePadActions";

const NotePadItem = (props) => {
    const {id} = useParams();
    const {pathname} = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();
    const notePadItem = useSelector(state => state.notePad.listById[id]);
    const [title, setTitle] = useState(notePadItem?.description || '');
    const [addedNot, setAddedNot] = useState({filename: '', content: ''});
    const isCreateMode = pathname === '/create';
    const authorized = !!localStorage.getItem('access_token')

    const [notes, setNotes] = useState({})

    useEffect(() => {
        if (notePadItem) {
            setTitle(notePadItem?.description)
            setNotes(notePadItem.files)
        }
    }, [notePadItem])

    useEffect(() => {
        if (id) {
            dispatch(getNotePadAction(id))
        }
    }, [id, dispatch])

    const addNote = (addForm) => {
        let isValid = true;
        if (!/^[\s\S]{1,255}$/.test(addedNot.filename)) {
            console.log('[Note Title]: Non blank, max 255 characters');
            isValid = false
        }
        if (Object.keys(notes).some(filename => filename === addedNot.filename)) {
            console.log('[Note Title]: Not`s Titles must be unique');
            isValid = false
        }
        if (!/^[\s\S]{1,1000}$/.test(addedNot.content)) {
            console.log('[Note Content]: Non blank, max 1000 characters');
            isValid = false
        }
        if (isValid) {
            setNotes({
                ...notes,
                [addedNot.filename]: addedNot
            })
            setAddedNot({filename: '', content: ''})
            addForm.reset()
        }
    }

    const changeFieldValue = (fileName, key, value, add) => {
        if (add) {
            setAddedNot({
                ...addedNot,
                [key]: value,
            })
        } else {
            const f = {...notes[fileName]};
            f[key] = value
            const n = {...notes};
            n[fileName] = f;
            setNotes(n)
        }
    }

    const deleteNote = (filename) => {
        const n = {...notes}
        delete n[filename]
        setNotes(n)
    }

    const onSave = () => {
        let isValid = true
        if (!/^[\s\S]{1,255}$/.test(title)) {
            console.log('[NotePad Title]: Non blank, max 255 characters');
            isValid = false
        }
        const keys = Object.keys(notes);
        if (!keys.length) {
            console.log('Notes: Array of Notes, at least one note is required');
            isValid = false
        } else {
            keys.forEach(key => {
                if (!/^[\s\S]{1,255}$/.test(notes[key].filename)) {
                    console.log('[Note Title]: Non blank, max 255 characters');
                    isValid = false
                }
                if (!/^[\s\S]{1,1000}$/.test(notes[key].content)) {
                    console.log('[Note Content]: Non blank, max 1000 characters');
                    isValid = false
                }
            })
        }
        if (isValid) {
            if(!isCreateMode) {
                dispatch(updateNotePadAction({
                    gist_id: id,
                    description: title,
                    files: notes
                }))
            } else {
                dispatch(createNotePadAction({
                    description: title,
                    files: notes
                }))
                history.push('/')
            }
        }
    }

    const onDelete = () => {
        dispatch(deleteNotePadAction(id))
        history.push('/')
    }

    if (!notePadItem && !isCreateMode) {
        return <h1 style={{color: 'red'}}>Notepad not found</h1>
    }


    return (
        <div>
            <div className='flex items-end content-between wrap notepad-item-header'>
                <div className={`flex column ${classes['title-container']}`}>
                    <label htmlFor={`note-pad-title`}>Notepad Title</label>
                    <input type="text"
                           id={`note-pad-title`}
                           placeholder='My notepad title...'
                           className={classes.title}
                           disabled={!authorized}
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='mt-10'>
                    <Button title={isCreateMode ? 'Create' : 'Save'} type='save'
                            style={{marginRight: '10px'}}
                            disabled={!authorized}
                            onClick={onSave}
                    />
                    <Button title='Delete' type='delete'
                            disabled={!authorized}
                            onClick={onDelete}
                    />
                </div>
            </div>

            <MyNotes notes={notes}
                     changeFieldValue={changeFieldValue}
                     addNote={addNote}
                     deleteNote={deleteNote}
                     disabled={!authorized}
            />
        </div>
    )
}

export default NotePadItem