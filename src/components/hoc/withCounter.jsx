import React from 'react';

export default function withCounter(OrginalComponent) {
    class NewComponent extends React.Component {
        state ={
            count:0,
        };
    
        incrementCount=()=>{
            this.setState((prevState) => ({
                count: prevState.count +1
            }));
        }
      render() {
        const{count} = this.state;
        return <OrginalComponent count={count} incrementCount={this.incrementCount}/>
      }
    }
    return NewComponent;
}
