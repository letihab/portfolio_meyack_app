import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateAccountForm() {
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let fieldErrors = { ...errors };

    // Validation logic
    if (fieldName === 'email') {
      if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        fieldErrors.email = 'Invalid email format';
      } else {
        delete fieldErrors.email;
      }
    }

    if (fieldName === 'password' || fieldName === 'confirmPassword') {
      if (value.length < 6) {
        fieldErrors.password = 'Password must be at least 6 characters long';
      } else {
        delete fieldErrors.password;
      }
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      // Send a POST request to your backend to save the user data
      const response = await axios.post('http://localhost:4000/api/user', formData);

      // Redirect to login page after successful account creation
      navigate('/login');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="authentication-container authentication-container1">
      <h2>Create Account</h2>
      <form className="authentication-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
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
            placeholder="Enter your password"
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
            placeholder="Confirm your password"
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height"
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight"
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
