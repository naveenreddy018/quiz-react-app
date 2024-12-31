import { useState,useEffect } from "react";


export default function UseEffectEaxmple(){
    const [data,setdata] = useState(0)
    
    useEffect(() => {
        console.log('Effect runs on every render');
    });
      
    
    return(
        <>
        <h3>data : {data}</h3>
        <button onClick={()=>setdata(data+1)}>increment</button>
        </>
    )



}