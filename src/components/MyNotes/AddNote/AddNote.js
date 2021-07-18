import React, {useRef} from 'react';

import Button from "../../reusables/Button/Button";
import InputTextarea from '../../reusables/InputTextarea/InputTextarea'

const AddNote = ({changeFieldValue, addNote, disabled}) => {
    const formElement = useRef(null)
    return (
        <form ref={formElement} onSubmit={e => e.preventDefault()}>
            <InputTextarea changeFieldValue={changeFieldValue} add={true} disabled={disabled}/>
            <Button type='add' title={'Add'}
                    style={{marginTop: '10px'}}
                    disabled={disabled}
                    onClick={() => addNote(formElement.current)}
            />
        </form>
    )
}

export default AddNote