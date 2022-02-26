import { useState } from "react";

export default function SetCounter(){
    const[count,setCount]= useState(0);

    let i=0;
    const addFive=()=>{
        while (i<5) {
            //react recomended way, because when react need to change many state at a time, for optimize performance react make batch update/operation
            setCount((prevCount)=>prevCount+1);
            //not recomended way, it can create problem in batch operation
            // setCount(()=>count+1);
            i += 1;
        }
    }

    return(
        <div>
            <div>{count}</div>
            <button type="button" onClick={addFive}>Add 5</button>
        </div>
    )
}