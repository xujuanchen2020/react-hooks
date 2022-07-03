import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState('John');
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <h1>{text||'Joe Doe'}</h1>
      <button type='button' className='btn' onClick={()=>setIsError(!isError)}>Toggle</button>
      <h2>{isError && 'there is an error.'}</h2>
      {
        isError ? (<h2>error!</h2>) : (<h2>no error.</h2>)
      }
    </div>
  );
};

export default ShortCircuit;
