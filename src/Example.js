import React from "react";

function Example(){
    const title = 'Blog post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'C 1'},
        {id: 2, text: 'C 2'},
        {id: 3, text: 'C 3'},
    ]

    const loading = false;
    const showComments = true;

    if (loading) return <h1>Loading... </h1>

    const commentBlock = (
    <div className="comments">
        <h3>
            comments ({comments.length})
        </h3>
    <ul>
        {comments.map((comment, index)=>(
            <li key={index}>{comment.text}</li>
        ))}
    </ul>
    </div>)

    return (
    <div className='container'>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        
        {showComments && (   
            commentBlock 
            ) 
        }
    </div>
    )
}

export default Example