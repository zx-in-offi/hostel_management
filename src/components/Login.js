import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (rollNumber === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard'); // Use navigate instead of history.push
    } else if (rollNumber && password) {
      navigate('/dashboard');
    } else {
      setError('Invalid Roll Number or Password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Hostel Management</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
