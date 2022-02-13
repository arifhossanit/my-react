import React from "react";
import Button from "./Button";

class Clock extends React.Component{
  state= {date: new Date(), local:'bn-BD'};
  // constructor(props){
  //   super(props);
  //   this.state= {date: new Date()};
  // }
  componentDidMount(){
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }
  handleClick=(local)=>{
    this.setState({
      local
    });
  }
  tick(){
    this.setState(
      {date: new Date()}
    );
  }
    render(){
      console.log('clock com');
      let {date, local} = this.state;
      return (
        <div>
          <h1 className='heading'>
            Hello Worlds -{this.props.children}
            <span>{date.toLocaleTimeString(local)}</span>
          </h1>
          {
          local==='en-US' ? (<Button change={this.handleClick} local='bn-BD' show />)
                          : (<Button change={this.handleClick} local='en-US' show={false} enable />)
          
          }
          
        </div>
        );
  }
  }
  
 
  export default Clock;