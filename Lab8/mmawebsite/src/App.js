import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Schedule from './components/Schedule';
import Instructional from './components/Instructional';
import {BrowserRouter, Route} from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      
      <Route exact path='/Instructional' component={Instructional}/>
      <Route exact path='/Schedule' component={Schedule}/>
      <Route exact path='/Posts' component={Posts}/>
      <Route exact path="/:post_id" component={Post}/>
    </div>
    </BrowserRouter>
  );
}}

export default App;
