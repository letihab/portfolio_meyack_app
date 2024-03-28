import { useState } from 'react';
import axios from 'axios';

const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);

      localStorage.setItem('token', response.data.token);

      window.location.href = '/recipes';
    } catch (error) {
      console.error('Error logging in:', error);

      if (error.response && error.response.status === 401) {
        alert('Email ou mot de passe incorrect.');
      } else {
        alert('Une erreur est survenue lors de la connexion.');
      }

    }
  };

  return { formData, handleChange, handleLogin };
};

export default useLoginForm;
