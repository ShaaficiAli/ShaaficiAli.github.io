import React, {Component} from 'react';
import ReactPlayer from "react-player"
import Video from './Video'
import mmaicon from '../images/mmaicon.jpg'
import bjjicon from '../images/bjjicon.png'
import muaythaiicon from '../images/muaythaiicon.jpg'
class Instructional extends Component{
    state={
        muaythaivideos:[
            {videoname: "Muay Thai | How to throw a Kick", style:"MuayThai",url:"https://www.youtube.com/watch?v=VT7e0FSwQsI"},
            {videoname: "How To Throw A Spear Knee - Muay Thai Knee Techniques", style:"MuayThai",url:"https://www.youtube.com/watch?v=cVGj96ARiYo"}
        ],
        bjjvideos:[
            {videoname: "The First Five Submissions You Need To Know | Jiu-Jitsu Basics", style:"bjj",url:"https://www.youtube.com/watch?v=hY35pBOfSNk"},
            {videoname: "First Five Escapes You Need to Know | Jiu-Jitsu Basics", style:"bjj",url:"https://www.youtube.com/watch?v=775gXyYzB08"}
        ],
        mmavideos:[
            {videoname: "Beginner's MMA Crash Course: Lesson 1 Basics", style:"mma",url:"https://www.youtube.com/watch?v=Q3mqj0S-ECY"},
            {videoname: "Muay Thai Training 101: Full Beginner's Class", style:"mma",url:"https://www.youtube.com/watch?v=vXv6uvrUjKo"}
        ],
        current:"muaythai"
    }
    handleStyleChange=(e)=>{
        this.setState({
            current: e.target.name
        })
    }
    render(){
        if(this.state.current=="muaythai"){
        return(
            <div>
              <button onClick={this.handleStyleChange} name="muaythai">MuayThai<img src={muaythaiicon} width="55px" height="55px"/></button>
              <button onClick={this.handleStyleChange} name="bjj">Bjj<img src={bjjicon} width="55px" height="55px"/></button>
              <button onClick={this.handleStyleChange} name="mma">MMA<img src={mmaicon} width="55px" height="55px"/></button> 
              <h1>Muay Thai videos:</h1>
              <Video video={this.state.muaythaivideos}/> 
              <h1>Terms used in this these videos</h1>
              <ul name="helplist">
                  <li><a href="https://en.wikipedia.org/wiki/Muay_Thai#Kicking_(Te)">Kick</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Knee_(strike)#Straight_knee_strike">Knee</a></li>
              </ul>
            </div>
        );}
        if(this.state.current=="bjj"){
            return(
                <div>
                  <button onClick={this.handleStyleChange} name="muaythai">MuayThai<img src={muaythaiicon} width="55px" height="55px"/></button>
                  <button onClick={this.handleStyleChange} name="bjj">Bjj<img src={bjjicon} width="55px" height="55px"/></button>
                  <button onClick={this.handleStyleChange} name="mma">MMA<img src={mmaicon} width="55px" height="55px"/></button>
                  <h1>BJJ videos:</h1>
                  <Video video={this.state.bjjvideos}/> 
                  <h1>Terms used in this these videos</h1>
                  <ul name="helplist">
                        <li><a href="https://bjjfanatics.com/blogs/techniques/escapes">escape</a></li>
                        <li><a href="https://www.howbjjworks.com/bjj-blog/2018/8/14/how-submissions-work-in-bjj#:~:text=In%20BJJ%2C%20a%20%E2%80%9Csubmission%E2%80%9D,maim%2C%20hurt%2C%20or%20subdue.&text=By%20comparison%2C%20another%20example%20is,and%2For%20maiming%20the%20victim.">submission</a></li>
                  </ul>
           
                </div>
            );}

        else{
            return(
                <div>
                <button onClick={this.handleStyleChange} name="muaythai">MuayThai<img src={muaythaiicon} width="55px" height="55px"/></button>
                <button onClick={this.handleStyleChange} name="bjj">Bjj<img src={bjjicon} width="55px" height="55px"/></button>
                <button onClick={this.handleStyleChange} name="mma">MMA<img src={mmaicon} width="55px" height="55px"/></button>  
                <h1>MMA videos:</h1>
                <Video video={this.state.mmavideos}/> 
                <h1>Terms used in this these videos</h1>
                <ul name="helplist">
                    <li><a href="https://www.merriam-webster.com/dictionary/punch">Punch</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Mixed_martial_arts">MMA</a></li>
                </ul>
              </div>
            );
        }
        
    }

}
export default Instructional