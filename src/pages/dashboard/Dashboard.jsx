import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome, {localStorage.getItem('email')}</h1>
    </div>
  );
};

export default Dashboard;