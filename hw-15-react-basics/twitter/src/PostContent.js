import React from 'react';

import './post-content.css'

function PostContent({ header, date, body }){
    const {name, nickname} = header;
    return(
        <section className='postContent'>
            <div className='postHeader'>
                <p className='authorName'>{name}</p>
                <p className='authorNickname'>{nickname}</p>
                <p className='postDate'>{date}</p>
            </div>
            <div className='postBody'>
                <p>{body.content}</p>
                <img src={body.image}/>
            </div>
        </section>
    )
}

export default PostContent;