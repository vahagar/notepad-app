import React, {useRef} from 'react';

import Button from "../../reusables/Button/Button";
import InputTextarea from '../../reusables/InputTextarea/InputTextarea'

const AddNote = ({changeFieldValue, addNote}) => {
    const formElement = useRef(null)
    return (
        <form ref={formElement} onSubmit={e => e.preventDefault()}>
            <InputTextarea changeFieldValue={changeFieldValue} add={true}/>
            <Button type='add' title={'Add'} style={{marginTop: '10px'}} onClick={() => addNote(formElement.current)}/>
        </form>
    )
}

export default AddNote