import React, { useState } from "react";

function Controlled_forms() {

  const [name, setname] = useState("")


  const Changename = (e) => {
    setname(e.target.value)
  }


  const Handler = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
    <h2>{name}</h2>
  }


  return (

    <>
      <h2>{name}</h2>
      <form action="http://localhost:3007/register" method="post" encType="multipart/form-data" onSubmit={Handler}>

        <input
          type="text" value={name} onChange={Changename}>
        </input>
        <input type="file" name="file" />      <input type="submit"></input>

      </form>


    </>
  )

}
export default Controlled_forms;