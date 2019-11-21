import React from 'react';

import classes from './Posts.css';

const Posts = ({ currentPosts }) => {
    return (
        <div className="postContainer">
            <ul>
                {currentPosts.map(post => {
                    return (<li key={post.id}>{post.body}</li>)
                })}
            </ul>

        </div>
    );
}

export default Posts;