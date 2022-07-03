import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
  <h2>
    <button className='btn' onClick={() => setShow(!show)}> Show/Hide </button>
    { show && <Item />}
  </h2>);
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize);
  },[])
  return(
    <div>
      <h2>Window Size</h2>
      <h2>Size: {size}</h2>
    </div>
  )
}

export default ShowHide;
