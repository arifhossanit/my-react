import React, { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount]=useState(0);
    const [date, setDate]=useState(new Date());

    //use effect take teo param, one is call back functionthat update component and secound param take a dependency array which base take decision component should update or not
    useEffect(()=>{
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count])


    const addClick=()=>{
        setCount((prevCount)=> prevCount+1);
    }

    const tick=()=>{
        setDate(new Date());
    }

    useEffect(()=>{
        console.log('updating date');
        const interval=setInterval(tick,1000);
        return ()=>{
            console.log('com unmounted');
            clearInterval(interval);
        }
    },[])

  return (
    <div>
        <div>{date.toLocaleTimeString()}</div>
        <button type='button' onClick={addClick}>Click</button>
    </div>
  )
}
