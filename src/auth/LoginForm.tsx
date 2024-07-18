import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

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
    <div className="h-full w-full lg:mt-20 md:mt-20">
    <div className="lg:px-12 lg:py-8 px-6 py-4">
      <h1 className="text-custom-font-primary font-inika mb-6 text-lg">
        My Listings
      </h1>

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
    </div>
    </div>
  );
}

export default LoginForm;