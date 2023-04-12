import React from 'react';
import '../styles/Auth.css'

const LogoutPage: React.FC = () => {
  return (
    <div className='logout-popup'>
      <h1>Logged out successfully</h1>
      <p>You have been logged out of your account.</p>
      <button>LOG IN</button>
    </div>
  );
};

export default LogoutPage;