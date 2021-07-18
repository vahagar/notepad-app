import React from 'react';
import classes from './Button.module.css'

const Button = ({title, type, style={}, onClick, disabled}) => {
    const className = `${classes.button} ${classes[type]}`
    return(
        <button className={className} style={style} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button