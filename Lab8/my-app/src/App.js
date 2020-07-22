
import React, {Component} from 'react';
import Ninjas from './Ninjas';
import { render } from 'react-dom';
import AddNinja from './AddNinja'

class App extends Component{
  state={
    ninjas: [
      { name: 'Kira', age : 33, belt: 'Killer', id:1},
      { name: 'Yoshi', age : 20, belt: 'Queen', id:2},
      { name: 'Kage', age : 35, belt: 'Stand', id:3}
    ]
  }
  addNinja = (ninja) =>{
    ninja.id=Math.random();
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({
      ninjas: ninjas
    }

    )
  }
  render(){
  return (
    <div className="App">
      <h1> My first React app!</h1>
      <p> Welcome :)</p>

      <Ninjas ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}
}

export default App;
