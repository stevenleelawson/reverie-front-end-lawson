import React from 'react';

export const RobotCard = ({
  date_added,
  first_active,
  current_name,
  height,
  weight,
  intelligence_metric}) => {
  return (
    <div>
      <h1>{current_name}</h1>
      <p>height: {height}</p>
      <p>weight: {weight}</p>
      <p>intelligence: {intelligence_metric}</p>
      <p>date added: {date_added}</p>
      <p>first active: {first_active}</p>
    </div>
  )
}
