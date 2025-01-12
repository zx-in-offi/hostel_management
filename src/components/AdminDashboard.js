import React, { useState } from 'react';

const AdminDashboard = () => {
  const [students, setStudents] = useState([
    { rollNumber: 'S101', logInTime: '10:00 AM', logOutTime: '5:00 PM' },
    { rollNumber: 'S102', logInTime: '11:00 AM', logOutTime: '6:00 PM' },
  ]);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <h3>Student Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Log In Time</th>
            <th>Log Out Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.rollNumber}</td>
              <td>{student.logInTime}</td>
              <td>{student.logOutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
