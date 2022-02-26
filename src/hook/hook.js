import React from 'react';
import ReactDom from 'react-dom';

const states = []; //[0: [value, setter], 1: [value, setter]]
let stateIndex = -1;

function useState(defaultValue) {
    const index = ++stateIndex;

    if(states[index]) return states[index];

    const setValue= (newValue) =>{
        states[index][0]= newValue;

        renderWithArif();
    }
    const returnArray = [defaultValue, setValue];
    states[index]=returnArray;
    return returnArray;
}

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) =>{
        const inputValue =e.target.value;
        const updateWarning =inputValue.includes('.js')? 'you need js skill' : null;
        setTodo(inputValue);
        setWarning(updateWarning);
    }
  return (
    <div>
        <p>{todo}</p>
        <p>
            <textarea name="todo" value={todo} onChange={handleInput} />
        </p>
        <hr />
        <h2>{warning || 'Good choice!'}</h2>
    </div>
  )
}


renderWithArif(){
    ReactDom.render(
          <Todo />,
        document.getElementById('root')
       );
}
    
