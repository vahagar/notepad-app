import React from 'react';

import classes from './InputTextarea.module.css'

const InputTextarea = ({style, title, desc, filename, changeFieldValue, add}) => {
    return(
        <div className={`${classes.note} flex column`} style={style}>
            <input type="text"
                   placeholder='Enter note title...'
                   value={title}
                   onChange={(e) => changeFieldValue(filename, 'filename' , e.target.value, add)}
            />
            <textarea rows="6"
                      placeholder='Enter note'
                      value={desc}
                      onChange={(e) => changeFieldValue(filename, 'content' , e.target.value, add)}
            />
        </div>
    )
}

export default InputTextarea