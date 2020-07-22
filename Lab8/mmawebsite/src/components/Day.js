import React, { Component } from 'react'
class Day extends Component{
    state={
        schedule:{

        },
        bjjDescription:"bjj is the best",
        muaythaiDescription:"muay thai is the best",
        mmaDescription:"mma is the best",
        currentDay:1
    }
    getSchedule = ()=>{
        
        if (this.props.date.getDay() == 0){
            return(
                <div>
                    <h2>Sunday, {this.props.date.toISOString().slice(0,10)}</h2>
                    <h3>5:30pm - 7pm begginner class Muay thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm advanced class Muay Thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
        if (this.props.date.getDay() == 1){
            return(
                <div>
                    <h2>Monday, {this.props.date.toISOString().slice(0,10)}</h2>
                    <h3>7:00am - 5:30pm open gym</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>5:30pm - 7pm begginner class Muay thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm Mma Class</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
        if (this.props.date.getDay() == 2){
            return(
                <div>
                    <h2>Tuesday, {this.props.date.toISOString().slice(0,10)}</h2>
                    <h3>7:00am - 5:30pm open gym</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>5:30pm - 7pm begginner class Muay thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm advanced class Muay Thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
        if (this.props.date.getDay() == 3){
            return(
                <div>
                    <h2>Wednesday, {this.props.date.toISOString().slice(0,10)}</h2>
                    <h3>5:30pm - 7pm begginner class Muay thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm advanced class Muay Thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
        if (this.props.date.getDay() == 4){
            return(
                <div>
                    <h2>Thursday, {this.props.date.toISOString().slice(0,10)}</h2>
                   <h3>5:30pm - 7pm begginner class Muay thai</h3>
                   <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm advanced class Muay Thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
        if (this.props.date.getDay() == 5){
            return(
                <div>
                    <h2>Friday, {this.props.date.toISOString().slice(0,10)}</h2>
                    <h3>5:30pm - 7pm begginner class Muay thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm advanced class Muay Thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
        if (this.props.date.getDay() == 6){
            return(
                <div>
                    <h2>Saturday, {this.props.date.toISOString().slice(0,10)}</h2>
                    <h3>5:30pm - 7pm begginner class Muay thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>7pm - 8:30pm advanced class Muay Thai</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                    <h3>8:30pm - 10pm bjj</h3>
                    <h5>
                        Description: Lorem ipsum
                    </h5>
                </div>
            )
        }
    }
    render(){
       return(
            this.getSchedule()
       )
    }
}
export default Day