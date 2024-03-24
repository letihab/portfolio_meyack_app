import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CreateAccountForm from './CreateAccountForm';

function ParentComponent() {
  const history = useHistory();

  const handleRedirectToLogin = () => {
    history.push('/login');
  };

  return (
    <div>
      <CreateAccountForm onAccountCreated={handleRedirectToLogin} />
    </div>
  );
}

export default ParentComponent;