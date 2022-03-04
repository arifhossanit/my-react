import React, { useState } from 'react';
import Local from './local';

export default function InlineStyle() {
  const [weight, setWeight] = useState('')
  const boldFont=()=>{
    const bold='bold';
    return bold;
  }
  return (
    <div>
        <Local bold={weight}/>
        <button onClick={()=>setWeight(boldFont())}>change color</button>
    </div>
  )
}
