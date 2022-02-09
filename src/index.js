import React from 'react';
import reactDom from 'react-dom';

// const element =React.createElement('h1',{className:'heading'},'Hello, world');
const element=(
<h1 className='heading'>
  Hello Worlds
</h1>
  );

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>;
  }
  return <h1>Hello, stranger.</h1>;
}
const element2= <h1>Hello, {getGreeting('arif')}</h1>
console.log(element2);
reactDom.render(element, document.getElementById('root'));