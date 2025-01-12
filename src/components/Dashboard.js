import React, { useState } from 'react';

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [logInTime, setLogInTime] = useState('');
  const [logOutTime, setLogOutTime] = useState('');
  const [reason, setReason] = useState('');

  const handleLogIn = () => {
    const time = new Date().toLocaleString();
    setLogInTime(time);
    setLogs([...logs, { time, type: 'Login' }]);
  };

  const handleLogOut = () => {
    const time = new Date().toLocaleString();
    setLogOutTime(time);
    setLogs([...logs, { time, type: 'Logout', reason }]);
  };

  return (
    <div className="dashboard-container">
      <h2>Student Dashboard</h2>
      <div>
        <h3>Log In Time: {logInTime || 'Not logged in yet'}</h3>
        <h3>Log Out Time: {logOutTime || 'Not logged out yet'}</h3>
        <input
          type="text"
          placeholder="Reason for leaving (optional)"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <h3>Logs:</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log.type} - {log.time} {log.reason && `- Reason: ${log.reason}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
