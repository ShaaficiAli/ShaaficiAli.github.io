import React, {Component} from 'react';
import Calendar from 'react-calendar'
import Day from './Day'
class Schedule extends Component{
    state={
        date: new Date(),
    }
    onChange = date => this.setState({date})
    render(){
        return(
            <div>
                <h1>Schedule</h1>
                <Calendar onChange={this.onChange}
                value={this.state.date}/>
                <Day date={this.state.date}/>
            </div>
            
        );
    }
}
export default Schedule