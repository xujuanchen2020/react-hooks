import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
const UseRefBasics = () => {
  const inputRef= useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    inputRef.current.focus();
  },[])

  return(
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name: </label>
          <input type='text'  />
        </div>
        <div>
          <label htmlFor="email">email: </label>
          <input type='email' ref={inputRef}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UseRefBasics;
