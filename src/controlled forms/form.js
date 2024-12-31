import React, { useState } from "react";

export default function FormData() {
  const [formdata, setdata] = useState({
    name: "",
    password: "",
    email: ""
  });

  const handlevent = (e) => {
    const { name, value } = e.target;
    setdata({ ...formdata, [name]: value });
  };

  const endtheform = (e) => {
    e.preventDefault();
    alert(`formdata: ${formdata.name}`);
    console.log(formdata);
  };

  return (
    <>
      <form onSubmit={endtheform}>
        <label htmlFor="name">Enter name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formdata.name}
          onChange={handlevent}
        />
        
        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formdata.password}
          onChange={handlevent}
        />
        
        <label htmlFor="useremail">Enter email</label>
        <input
          type="email"
          name="email"
          id="useremail"
          value={formdata.email}
          onChange={handlevent}
        />
        
        <input type="submit" />
      </form>
    </>
  );
}
