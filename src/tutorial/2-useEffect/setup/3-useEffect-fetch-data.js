import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [people, setPeople] = useState([]);
  
  const getInfo = async() => {
    const response = await fetch(url);
    const user = await response.json();
    setPeople(user);
  }
  
  useEffect(()=>{
    getInfo();
  },[]);

  return(
    <div>
      <h3>github users</h3>
      <ul className='users'>
      {
        people.map((person)=>{
          const {login, id, avatar_url, html_url} = person;
          return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url} target="_blank">Profile</a>
            </div>
          </li>
          )
        })
      }
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
