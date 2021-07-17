import React from 'react';

import Button from "../../reusables/Button/Button";
import InputTextarea from '../../reusables/InputTextarea/InputTextarea'

const AddNote = ({classes}) => {
    return (
        <>
            <InputTextarea />
            <Button type='add' title={'Add'} style={{marginTop: '10px'}}/>
        </>
    )
}

export default AddNote