import React from 'react';
import  { RobotCard }  from '../RobotCard';
import './styles.css';

export const RobotContainer = ({data, removeRobot, updateRobot}) => {
  const displayRobots = data.map( (robot, index) => {
    return <RobotCard
              id={robot.id}
              date_added={robot.date_added}
              first_active={robot.first_active}
              current_name={robot.current_name}
              height ={robot.height}
              weight={robot.weight}
              intelligence_metric={robot.intelligence_metric}
              key={robot.current_name + index}
              removeRobot={removeRobot}
              updateRobot={updateRobot}
            />
  })
  return (
    <div className='robot-container'>{ displayRobots }</div>
  )
}
