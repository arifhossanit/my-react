import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Form from './components/Form';
import reportWebVitals from './reportWebVitals';

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

 // const clockCom = new Clock();

 ReactDom.render(
  <React.StrictMode>
    <App />
    <Form/>
  </React.StrictMode>,
  document.getElementById('root')
 );

 reportWebVitals();