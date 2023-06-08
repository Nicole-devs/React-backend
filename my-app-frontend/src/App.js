import React, { useState, useEffect } from 'react';
import User from './User';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    readWorkouts();
  }, []);

  const createWorkout = name => {
    fetch('/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
      .then(response => response.json())
      .then(workout => setWorkouts([...workouts, workout]));
  };

  const readWorkouts = () => {
    fetch('/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  };

  const updateWorkout = (id, name) => {
    fetch(`/workouts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
      .then(response => response.json())
      .then(updatedWorkout => setWorkouts(workouts.map(workout => workout.id === id ? updatedWorkout : workout)));
  };

  const deleteWorkout = id => {
    fetch(`/workouts/${id}`, {
      method: 'DELETE'
    })
      .then(() => setWorkouts(workouts.filter(workout => workout.id !== id)));
  };

  const createExercise = (workoutId, name) => {
    fetch('/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, workout_id: workoutId })
    })
      .then(response => response.json())
      .then(exercise => setWorkouts(workouts.map(workout => workout.id === workoutId ? { ...workout, exercises: [...workout.exercises, exercise] } : workout)));
  };

  return (
    <div>
      <h1>Workouts</h1>
      <WorkoutList workouts={workouts} onUpdate={updateWorkout} onDelete={deleteWorkout} onCreateExercise={createExercise} />
      <WorkoutForm onCreate={createWorkout} />
    </div>
  );
}

export default App;
