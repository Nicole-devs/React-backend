import React from 'react';

function User({ currentUser }) {
  return (
    <div>
      <h2>Welcome, {currentUser.name}!</h2>
    </div>
  );
}

export default User;
