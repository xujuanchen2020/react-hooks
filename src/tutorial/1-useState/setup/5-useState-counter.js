import React, { useState } from 'react';

const UseStateCounter = () => {
  const [text, setText] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setText((prev)=>prev+1)
    }, 3000)
  }
  return (
    <>
      <h1>{text}</h1>
      <div>
        <button className='btn' onClick={() => setText(text - 1)}>Decrease</button>
        <button className='btn' onClick={() => setText(0)}>Reset</button>
        <button className='btn' onClick={() => setText(text + 1)}>Increase</button>
      </div>
      <div>
        <h2 style={{marginTop: 40}}>Complex Counter</h2>
        <h1>{text}</h1>
        <button className='btn' onClick={handleClick}>Increase</button>
      </div>
    </>
  );
};

export default UseStateCounter;
