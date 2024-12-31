import React from "react";
import { useNavigate } from "react-router-dom";


// another way for navigation in react is usenavigate hook  in react-router-dom
function Invalidscreen (){
    const navigate = useNavigate();
    const handlenavigate = ()=>{
       const isnavigate = true;
       if(isnavigate){
        navigate("/")
       }else{

       }
    }
    return (
        <>
        <div>
            <h2>
            404 error    
            </h2>
            <button class="btn btn-blue" onClick={handlenavigate}>back to home </button>
        </div>
        </>
    )
}
export default Invalidscreen