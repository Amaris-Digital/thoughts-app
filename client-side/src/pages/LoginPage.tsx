import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../styles/Auth.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(`Logging in with ${username} and ${password}`);
    // Add login logic here
  };

  return (
    <div>
      <Header/>
      <NavBar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='auth-container'>
        <div>
          <label htmlFor="username">Username:</label> <br />
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label> <br />
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;