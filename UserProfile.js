import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="avatar-container">
        <img src={user.avatar} alt="User Avatar" className="avatar" />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
