import React from 'react';
import { RobotCard } from '../RobotCard';

export const RobotContainer = ({data}) => {
  console.log('yeah',data)
  const displayRobots = data.map( (robot, index) => {
    console.log(robot)
    return <RobotCard
              date_added={robot.date_added}
              first_active={robot.first_active}
              current_name={robot.current_name}
              height ={robot.height}
              weight={robot.weight}
              intelligence_metric={robot.intelligence_metric}
            />
  })
  return (
    <div>{ displayRobots }</div>
  )
}
