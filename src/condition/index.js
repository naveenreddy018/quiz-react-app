import React, { useState } from 'react';

function MyComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   return (
    <>
   <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn?"log in":"lod out"}
    </button>  


    {isLoggedIn && <h2>welcom naveen reddy</h2>}  
    </>
   )    

}

export default MyComponent;

