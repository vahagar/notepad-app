import React from 'react';
import classes from './Button.module.css'

const Button = ({title, type, style={}}) => {
    const className = `${classes.button} ${classes[type]}`
    return(
        <button className={className} style={style}>
            {title}
        </button>
    )
}

export default Button