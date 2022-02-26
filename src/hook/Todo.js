import React, { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState({
      title:'',
      description:'',
    });
    const [warning, setWarning] = useState(null);
    
    
    const handleInput = (e) =>{
        const inputValue =e.target.value;

        if (e.target.name==='title') {
          setTodo({...todo, title: inputValue});
          const updateWarning =inputValue.includes('.js')? 'you need js skill' : null;
          setWarning(updateWarning);
        }else if(e.target.name==='description'){
          setTodo({...todo, description: inputValue});
        }
    }
    
    const {title,description}= todo;
  return (
    <div>
        <p>{title}</p>
        <p>
          <input type="text" name="title" value={title} onChange={handleInput}/>
          <textarea name="description" value={description} onChange={handleInput} />
        </p>
        <hr />
        <h2>{warning || 'Good choice!'}</h2>
    </div>
  )
}
