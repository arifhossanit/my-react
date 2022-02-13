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
    const {change, local, show, enable}=this.props;
    if (!enable) return null;
    return (
      <>
        <button type='button' onClick={()=>change(local)}>
          { local==='bn-BD' ? 'Change here': 'পরিবর্তন করুন'}
        </button>
          {show && <p>Hello</p> }
      </>
    )
  }
}

export default Button