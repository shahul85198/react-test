import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'

function App() {

const [users, setUsers] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => setUsers(users))
}, [])

  return (
    <div className="App">
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
       
    </div>
  );
}

export default App;
