import React, { useState } from 'react';

function Workout({ workout, onUpdate, onDelete, onCreateExercise }) {
  const [name, setName] = useState(workout.name);
  const [newExerciseName, setNewExerciseName] = useState('');

  const handleUpdate = () => {
    onUpdate(workout.id, name);
  };

  const handleDelete = () => {
    onDelete(workout.id);
  };

  const handleCreateExercise = () => {
    onCreateExercise(workout.id, newExerciseName);
    setNewExerciseName('');
  };

  return (
    <li>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        onBlur={handleUpdate}
      />
      <button onClick={handleDelete}>Delete Workout</button>
      <ul>
        {workout.exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newExerciseName}
        onChange={event => setNewExerciseName(event.target.value)}
      />
      <button onClick={handleCreateExercise}>Add Exercise</button>
    </li>
  );
}

export default Workout;
