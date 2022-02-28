import React, { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form2() {
    const inputRef = useRef(null);
    useEffect(()=>{
        // here
        inputRef.current.focus();
    },[])
  return (
    <div>
        <Input ref={inputRef} type="text" placeholder='Enter text' />
    </div>
  )
}
