import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginOptions = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Hostel Management System</h1>
      <button onClick={() => navigate('/admin-login')} style={buttonStyle}>
        Admin Login
      </button>
      <button onClick={() => navigate('/student-login')} style={buttonStyle}>
        Student Login
      </button>
    </div>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '15px 30px',
  fontSize: '18px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default LoginOptions;
