import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Send login data to backend
    const response = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Admin logged in successfully!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
};

const inputStyle = {
  margin: '10px',
  padding: '10px',
  fontSize: '16px',
  width: '200px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default AdminLogin;
