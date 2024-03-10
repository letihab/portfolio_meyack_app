import React, { useState } from 'react';
import '../styles/loginForm.css';
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';

function AuthenticationPage() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div>
      {isLoginFormVisible ? (
        <>
          <CreateAccountForm />
          <p>Vous avez déjà un compte ? <button onClick={toggleFormVisibility}>Connectez-vous</button></p>
        </>
      ) : (
        <>
          <LoginForm />
          <p>Vous n'avez pas encore de compte ? <button onClick={toggleFormVisibility}>Créer un compte</button></p>
        </>
      )}
    </div>
  );
}

export default AuthenticationPage;
