import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/loginForm.css';

function CreateAccountForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    height: '',
    weight: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    setIsLoggedIn(storedToken !== null);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = {};

    switch (fieldName) {
      case 'username':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'Username is required';
        }
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          fieldErrors[fieldName] = 'Invalid email address';
        }
        break;
      case 'password':
        if (value.length < 6) {
          fieldErrors[fieldName] = 'Password must be at least 6 characters long';
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          fieldErrors[fieldName] = 'Passwords do not match';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [fieldName]: fieldErrors[fieldName],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/user', formData);

      setIsLoggedIn(true);
      localStorage.setItem('authToken', response.data.token);

      window.location.href = '/login';
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="authentication-container authentication-container1">
      <h2>Create Account</h2>
      {isLoggedIn ? (
        <p>
          Account created successfully! You can now{' '}
          <a href="/login">login</a>.
        </p>
      ) : (
        <form className="authentication-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            {errors.age && <p className="error-message">{errors.age}</p>}
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
            {errors.height && <p className="error-message">{errors.height}</p>}
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
            {errors.weight && <p className="error-message">{errors.weight}</p>}
          </div>
          <button type="submit">Create Account</button>
        </form>
      )}
    </div>
  );
}

export default CreateAccountForm;

