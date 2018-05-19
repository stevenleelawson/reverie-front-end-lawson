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
