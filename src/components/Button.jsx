import React from 'react';


export class Button extends React.Component {
  shouldComponentUpdate(nextProps){
    const {change:currentChange, local:currentLocal} =this.props;
    const {change:nextChange, local:nextLocal} =nextProps;
    if (currentChange===nextChange && currentLocal === nextLocal) {
      return false;
    }
    return true;
  }
  render() {
    console.log('button com');
    const {change, local}=this.props;
    return (
      <button type='button' onClick={()=>change(local)}>Click Here</button>
    )
  }
}

export default Button