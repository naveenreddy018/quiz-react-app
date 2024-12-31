import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${nameInput.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameInput} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;