import React from 'react';
import AuthForm from './pages/auth/AuthForm.jsx'; 
import Dashboard from './pages/dashboard/Dashboard.jsx';

function App() {
  const isAuthenticated = localStorage.getItem('email') && localStorage.getItem('password');

  if (isAuthenticated) {
    return <Dashboard />;
  }
  return (
      <AuthForm />
  );
}

export default App;
