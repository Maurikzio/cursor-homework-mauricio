import React from 'react';
import Avatar from './Avatar';
import PostContent from './PostContent';
import './post.css'

function Post({author, content, image, date}){
    const authorInfo = {
        name: author.name,
        nickname: author.nickname
    };
    const body = {content,image };

    return(
        <div className="post">
            <Avatar photo={author.photo}/>
            <PostContent 
                header={authorInfo}
                date={date}
                body={body}
            />
        </div>
    )
}

export default Post;