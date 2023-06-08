import React, { useState } from 'react';

function WorkoutForm({ onCreate }) {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onCreate(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Workout Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button type="submit">Create Workout</button>
    </form>
  );
}

export default WorkoutForm;
