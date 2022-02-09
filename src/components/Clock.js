import React from "react";

class Clock extends React.Component{
  state= {date: new Date()};
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
  tick(){
    this.setState(
      {date: new Date()}
    );
  }
    render(){
      return (
          <h1 className='heading'>
            Hello Worlds -{this.props.children}
            <span>{this.state.date.toLocaleTimeString(this.props.local)}</span>
          </h1>
        );
  }
  }
  
 
  export default Clock;