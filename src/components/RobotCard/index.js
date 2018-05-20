import React from 'react';

export const RobotCard = ({
  id,
  date_added,
  first_active,
  current_name,
  height,
  weight,
  intelligence_metric,
  removeRobot
}) => {
  return (
    <div>
      <h1>{current_name}</h1>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
      <p>intelligence: {intelligence_metric}</p>
      <p>date added: {date_added}</p>
      <p>first active: {first_active}</p>
      <button onClick={() => removeRobot(id)}>Deactivate Robot</button>
    </div>
  )
}
