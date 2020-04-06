import React from 'react';

import './avatar.css';

function Avatar({photo}){
    return(
        <div className='avatar'>
            <img src={photo}/>
        </div>
    )
}

export default Avatar;