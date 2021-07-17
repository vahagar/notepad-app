import React from 'react';

import classes from './InputTextarea.module.css'

const InputTextarea = ({style, title, desc, filename, changeFieldValue}) => {
    return(
        <div className={`${classes.note} flex column`} style={style}>
            <input type="text"
                   placeholder='Enter note title...'
                   value={title}
                   onChange={(e) => changeFieldValue(filename, 'filename' , e.target.value)}
            />
            <textarea rows="6"
                      placeholder='Enter note'
                      value={desc}
                      onChange={(e) => changeFieldValue(filename, 'content' , e.target.value)}
            />
        </div>
    )
}

export default InputTextarea