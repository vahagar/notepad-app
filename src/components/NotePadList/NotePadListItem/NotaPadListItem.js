import React from 'react';
import {Link} from "react-router-dom";

const NotePadListItem = ({id, title}) => {
    return(
        <div>
            <Link to={`/${id}`}>{title}</Link>
        </div>
    )
}

export default NotePadListItem