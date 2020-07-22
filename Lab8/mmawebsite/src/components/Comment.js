import React, { Component } from 'react';
const Comment = ({comments})=>{
    const CommentList = comments.map(comment =>{
        return(
            <div className="Comment">
                <h1>{comment.text}</h1>
                
            </div>
        );
       

    })
    return(
        <div className="CommentSection">
            {CommentList}
        </div>
    )

} 
export default Comment