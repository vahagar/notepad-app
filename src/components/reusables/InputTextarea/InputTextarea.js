import React from 'react';

import classes from './InputTextarea.module.css'

const InputTextarea = ({style}) => {
    return(
        <div className={`${classes.note} flex column`} style={style}>
            <input type="text" placeholder='Enter note title...'/>
            <textarea rows="6" placeholder='Enter note'/>
        </div>
    )
}

export default InputTextarea