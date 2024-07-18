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
    <div className="h-screen flex items-center justify-center ">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-custom-font-primary ">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-custom-font-primary mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              required
            />
          </div>
          <div className=''>
            <label htmlFor="password" className="block text-sm font-medium text-custom-font-primary  mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full"
              required
            />
          </div>
          <div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg bg-custom-btn-primary text-white font-bold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-custom-btn-primary focus:border-custom-btn-primary"
          >
            Login
          </button>
          </div>
         
        </form>
        <div className='text-center mt-4'>
        <h2>Not a member? <span className='text-custom-btn-primary'>Register</span></h2>
        </div>
        
      </div>
    </div>
  );
}

export default LoginForm;

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

   
 
