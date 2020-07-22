import React, {Component} from 'react';
import PostData from './PostData.json';
import Comment from './Comment';
import AddComment from './AddComment';
class Post extends Component{
    state={
        id:null,
        title:null,
        comments:[]
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        var currentPost= null;
        for(var i=0;i<PostData.length;i++){
            if(id == PostData[i].id){
                currentPost = PostData[i]
            }
        }
        if(currentPost != null){
        this.setState({
            id: id,
            title:currentPost.Title,
            comments: currentPost.comments
        })}
    }
    addComment=(comment)=>{
        const newComments = this.state.comments;
        newComments.push(comment);
        this.setState({
            comments: newComments
        })
    }
    render(){
        return(
            <div className="container">
                <h3>{this.state.title}</h3>
                <Comment comments={this.state.comments}/>
                <AddComment addComment={this.addComment}/>
            </div>
        )
    }
}
export default Post