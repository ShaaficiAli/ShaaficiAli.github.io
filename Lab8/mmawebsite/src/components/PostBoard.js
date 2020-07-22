import React from 'react';
const PostBoard = ({Posts})=>{
    const PostList = Posts.map(post =>{
        return(
            <div className="postBoard" key = {post.id}>
                <h1><a href={"/"+post.id}>{post.Title}</a></h1>
                
            </div>
        )
    })
    return(
        <div className = "post-List">
            {PostList}
        </div>
    )
    
   
}
export default PostBoard