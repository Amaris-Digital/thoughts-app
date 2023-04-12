import React, { useState } from 'react';
import '../styles/Auth.css'
type SignupFormProps = {
  onSignup: (email: string, password: string) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSignup(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='auth-container'>
      <h2>Sign Up</h2>
      <label>
        Email: <br />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label>
        Password: <br />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </label>
      <label>
        Confirm Password: <br />
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;