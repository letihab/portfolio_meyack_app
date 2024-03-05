import React, { useState } from 'react';
import '../userprofile.css';

function EditableProfileForm() {
  // Define state variables for user profile information, BMI calculation, and errors
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [profilePicture, setProfilePicture] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform client-side validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, calculate BMI and submit form data
      calculateBMI();
      console.log('Submitted Profile Data:', { username, email, profilePicture, height, weight, bmi });
    } else {
      // Update state with validation errors
      setErrors(validationErrors);
    }
  };

  // Function to perform client-side validation
  const validateForm = () => {
    const errors = {};
    // Validate username (required)
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    // Validate email (required and format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }
    // No validation for profile picture (optional)
    // Validate height (required and numeric)
    if (!height.trim()) {
      errors.height = 'Height is required';
    } else if (isNaN(height)) {
      errors.height = 'Height must be a number';
    }
    // Validate weight (required and numeric)
    if (!weight.trim()) {
      errors.weight = 'Weight is required';
    } else if (isNaN(weight)) {
      errors.weight = 'Weight must be a number';
    }
    return errors;
  };

  // Function to calculate BMI
  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const weightInKg = weight;
    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
    setBMI(calculatedBMI.toFixed(2)); // Round BMI to 2 decimal places
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Editable username field */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* Display username validation error */}
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      {/* Editable email field */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Display email validation error */}
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      {/* Profile picture upload */}
      <div>
        <label htmlFor="profile-picture">Profile Picture:</label>
        <input
          type="file"
          id="profile-picture"
          accept="image/*"
          onChange={(e) => setProfilePicture(e.target.files[0])}
        />
      </div>
      {/* Height input */}
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        {/* Display height validation error */}
        {errors.height && <p className="error">{errors.height}</p>}
      </div>
      {/* Weight input */}
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        {/* Display weight validation error */}
        {errors.weight && <p className="error">{errors.weight}</p>}
      </div>
      {/* Display calculated BMI */}
      {bmi && (
        <div>
          <label>BMI:</label>
          <p>{bmi}</p>
        </div>
      )}
      {/* Submit button */}
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditableProfileForm;
