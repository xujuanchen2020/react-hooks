import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [text, setText] = useState(0);
  const handleClick = () => {
    setText(text + 1);
  }

  useEffect(() => {
    if(text > 3){
      document.title = `new value (${text})`;
    }
  })
  return (
    <>
      <h1>{text}</h1>
      <button className='btn'onClick={handleClick}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;
