import React, { useState } from 'react';

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'John',
    age: 24,
    job: 'software engineer',
  })
  const handleChange = () => {
    let newPeople = ({ ...people, job:'teacher' });
    setPeople(newPeople);
  }
  return (
    <>
      <div>
        <h3>{people.name}</h3>
        <h3>{people.age}</h3>
        <h3>{people.job}</h3>
      </div>
      <button className='btn' onClick={handleChange}>change</button>
    </>
  );
};

export default UseStateObject;
