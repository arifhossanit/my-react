import React from 'react';
import reactDom from 'react-dom';

// const element =React.createElement('h1',{className:'heading'},'Hello, world');
// function Clock({local}){
//   return (
//     <h1 className='heading'>
//       Hello Worlds <span>{new Date().toLocaleTimeString(local)}</span>
//     </h1>
//     );
// }

// reactDom.render(clock(), document.getElementById('root'));
// reactDom.render(<Clock local='bn-BD'/>, document.getElementById('root'));

class Clock extends React.Component{
  render(){
    return (
        <h1 className='heading'>
          Hello Worlds -{this.props.children}
          <span>{new Date().toLocaleTimeString(this.props.local)}</span>
        </h1>
      );
}
}

// const clockCom = new Clock();
reactDom.render(<Clock local='bn-BD'>text</Clock>, document.getElementById('root'));