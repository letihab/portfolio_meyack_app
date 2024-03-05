import React, { useState, useEffect } from 'react';
import EditableProfileForm from './components/EditableProfileForm'; // Assuming you have defined the EditableProfileForm component
import '../userprofile.css';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile data from the API
    fetch('/api/user-profile', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer your_jwt_token_here'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Render profile picture if available */}
          {userData.profilePicture && (
            <div>
              <p>Profile Picture:</p>
              <img src={userData.profilePicture} alt="Profile" />
            </div>
          )}
          <EditableProfileForm />
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default UserProfile;
