import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1>StaffSync HR Management</h1>
        <Routes>
          <Route path="/" element={<h2>Login Portal (JWT Auth)</h2>} />
          <Route path="/employee-dashboard" element={<div><h2>Employee Dashboard</h2><p>Mark Attendance, Apply Leave</p></div>} />
          <Route path="/manager-dashboard" element={<div><h2>Manager Dashboard</h2><p>Approve Leaves, Monitor Performance</p></div>} />
          <Route path="/hr-dashboard" element={<div><h2>HR Dashboard</h2><p>Manage Users, Analytics</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;