import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Utilisez la méthode getUsers de apiService pour récupérer les utilisateurs
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await apiService.getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
