import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Hello World!');

  const handleClick = () => {
    if(text === 'Hello World!'){
      setText('Random Text')
    } else {
      setText('Hello World!')
    }
  }

  return (
  <>
  <h2>{text}</h2>
  <button className='btn' onClick={handleClick}>Click Me!</button>
  </>
  );


};

export default UseStateBasics;
