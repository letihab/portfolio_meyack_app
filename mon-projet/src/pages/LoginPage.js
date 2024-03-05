import React from 'react';
import LoginForm from './LoginForm';

function LoginPage() {
  const handleLoginSubmit = (username, password) => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
}

export default LoginPage;
