import React from 'react';
import Workout from './Workout';

function WorkoutList({ workouts, onUpdate, onDelete, onCreateExercise }) {
  return (
    <ul>
      {workouts.map(workout => (
        <Workout key={workout.id} workout={workout} onUpdate={onUpdate} onDelete={onDelete} onCreateExercise={onCreateExercise} />
      ))}
    </ul>
  );
}

export default WorkoutList;
