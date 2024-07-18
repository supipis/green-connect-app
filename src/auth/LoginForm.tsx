import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import logoImageUrl from "../assets/logo.png"

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      await login(username, password);
      localStorage.setItem('auth', JSON.stringify(btoa(`${username}:${password}`)));
      navigate('/'); 
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="h-full w-full px-10 py-10  ">
    <div className="text-center ">
       <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form> 
      {/* <div className="">
          <img src={logoImageUrl} alt="" className="h-10"/>
        </div>
        <h1 className="text-custom-font-primary font-inika mb-6 text-3xl">
        Login
      </h1>

<div>
<form className="space-y-3" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" className="block text-custom-font-primary px-20 py-4 text-lg">
              Name
            </label>
            <div className='flex justify-center'>
            <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 text-custom-font-primary p-2 block w-2/5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
          required
        />
            </div>
            
          </div>
          <div className=''>
            <label htmlFor="password" className="block text-custom-font-primary px-20 py-4 text-lg">
             Password
            </label>
            <div className='flex justify-center'>
            <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 text-custom-font-primary p-2 block w-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
          required
        />
            </div>
           
          </div>

         
          </form>
</div>
     
         

          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-custom-btn-primary text-custom-btn-txt py-3 px-12 rounded-lg mt-2 font-bold text-xl mb-20"
            >
              Login
            </button>
            </div> */}

   
    </div>
    </div>
  );
}

export default LoginForm;