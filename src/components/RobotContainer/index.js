import React from 'react';
import { RobotCard } from '../RobotCard';

export const RobotContainer = ({data, removeRobot}) => {
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
            />
  })
  return (
    <div>{ displayRobots }</div>
  )
}
