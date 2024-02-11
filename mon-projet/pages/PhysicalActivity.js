import React from 'react';

function PhysicalActivity() {
  return (
    <div className="physical-activity-page">
      <h2>Physical Activity</h2>
      <div className="activity-log">
        <h3>Activity Log</h3>
        <ul>
          <li>Date: January 10, 2024 - Activity: Running - Calories Burned: 300</li>
          <li>Date: January 11, 2024 - Activity: Cycling - Calories Burned: 250</li>
          {/* Ajoutez d'autres activités en utilisant des données dynamiques */}
        </ul>
      </div>
    </div>
  );
}

export default PhysicalActivity;
