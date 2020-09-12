import React from 'react';

export default ({ comments }) => {

    console.log(comments);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    });

    return <ul>{renderedComments}</ul>
}