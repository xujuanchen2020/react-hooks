import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const defaultState = {
    people: [],
    text: '',
  }
  const [name, setName] = useState('');
  const [state, action] = useReducer(reducer, defaultState);

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        const newPeople = [...state.people, action.payload];
        return {...state, people: newPeople, text: 'item added'};
      case 'NO_VALUE':
        return {...state, text: 'Please enter item.'};
      case 'REMOVE_ITEM':
        const newItem = state.people.filter((person)=>person.id != action.payload);
        return {...state, people: newItem};
      default:
        throw new Error();
    }
  }
  const handleSumbit = (e) => {
    e.preventDefault();
    if(name){
      const item = {id: new Date().getTime().toString(), name};
      action({type:'ADD_ITEM', payload: item});
      setName('');
    }else{
      action({type:'NO_VALUE'});
    }
  }
  
  return(
    <div>
      <Modal text = {state.text}/>
      <form className='form' onSubmit={handleSumbit}>
        <div className='form-control'>
        <label htmlFor="memu">memu</label>
        <input type="text" id='memu' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <button type='submit' >Add</button>
      </form>
      {state.people.map((person)=>{
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={()=>action({type:'REMOVE_ITEM', payload: person.id})}>remove</button>
          </div>
        )
      })
      }
    </div>
  );
};

export default Index;
