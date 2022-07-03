import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';


const MultipleReturns = () => {
  const [user,setUser] = useState('default');
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(()=>{
    fetch(url)
    .then((resp)=> resp.json())
    .then((user) => {
      const {login} = user;
      setUser(login);
      setLoading(false);
    })
},[])

  if(loading){
    return <h1>loading......</h1>
  }
  if(isError){
    return <h1>You have error.</h1>
  }
  return <h1>{user}</h1>

};

export default MultipleReturns;
