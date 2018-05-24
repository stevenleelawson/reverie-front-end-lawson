import React from 'react';
import './styles.css';

export const RobotCard = ({
  id,
  date_added,
  first_active,
  current_name,
  height,
  weight,
  intelligence_metric,
  removeRobot,
  updateRobot
}) => {
  return (
    <div className='card'>
      <h1>{current_name}</h1>
      <p>height: <span
        className='taco'
        contentEditable='true'
        onBlur={() => updateRobot(id)}
        >
          {height}</span></p>
      <p>weight: <span contentEditable='true'>{weight}</span></p>
      <p>intelligence: {intelligence_metric}</p>
      <p>date added: {date_added}</p>
      <p>first active: {first_active}</p>
      <button className='deactivate' onClick={() => removeRobot(id)}>Deactivate Robot</button>
    </div>
  )
}
