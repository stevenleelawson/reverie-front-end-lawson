export const fetchRobots = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/robots');
    const robots = await response.json();
    // const robots = this.setState({ robots: data })
    console.log('robits', robots)
    return robots
  } catch (error) {
    throw new Error(error)
  }
}

export const postRobot = async (robot) => {
  console.log('postRobot', robot)
  try {
    const response = await fetch('http://localhost:3000/api/v1/robots', {
      method: 'POST',
      body: JSON.stringify(robot),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response;
  } catch (error) {
    throw new Error('Unable to add robot' + error)
  }
};

export const deleteRobot = async (id) => {
  try {
    return await fetch(
      `http://localhost:3000/api/v1/robots/${id}`,
      {method: 'DELETE'}
    );
  } catch (error) {
    throw new Error('Unable to delete robot' + error)
  }
}

export const putRobot = async (id, robotChanges) => {
  try {
    return await fetch(
      `http://localhost:3000/api/v1/robots/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(robotChanges),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    throw new Error('Unable to update robot' + error)
  }
}
