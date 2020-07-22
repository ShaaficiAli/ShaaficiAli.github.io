import React, {Component} from 'react';
import PostBoard from './PostBoard'
class Posts extends Component{
    state={
        Posts:[{Title:"My kicks are coming together", id:1, comments: []},
            {Title:"My grappling has gotten better", id:2, comments: []},
            {Title:"I decided to quit", id:3, comments:[]}]
        ,
        numPosts:3,
        numComments:0,
        currentLanguage: "en",
        buttonlanguage:"Change language to french"
}

    handleClick =()=>{
        if(this.state.currentLanguage=="en"){
        const newPost=[{Title:"Mes coups de pied se rejoignent", id:1, comments: []},
        {Title:"Mon grappling s'est amélioré", id:2, comments: []},
        {Title:"J'ai décidé d'arrêter", id:3, comments:[]}];
        this.setState({
            currentLanguage:"fr",
            Posts:newPost,
            buttonlanguage:"Changer la langue en anglais"
        })
        
        }
        else if(this.state.currentLanguage=="fr"){
            const newPost=[{Title:"My kicks are coming together", id:1, comments: []},
            {Title:"My grappling has gotten better", id:2, comments: []},
            {Title:"I decided to quit", id:3, comments:[]}];
            this.setState({
                currentLanguage:"en",
                Posts:newPost,
                buttonlanguage:"Change language to french"
            })
            
        }
        console.log(this.state.currentLanguage);
    }
    render(){
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.buttonlanguage}</button>
            <PostBoard Posts={this.state.Posts}/>
            </div>
        );
    }
}
export default Posts