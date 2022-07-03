import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email){
      const person = {
        id: new Date().getTime().toString(),
        name: name,
        email: email,
      };
      setList((list)=> {// (list) => [...list, person]
        return [...list, person]
      });
    }

    setName('');
    setEmail('');
  }

  return (
    <div>
      <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="name" >Name: </label>
          <input type="text" id="name" name ='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor="email" >Email: </label>
          <input type="email" id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type='submit' >Add Person</button>
      </form>
      {list.map((person)=>{
        const {id, name, email} = person;
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
    </div>
  );
};

export default ControlledInputs;
