import React, { Component } from 'react';
import './App.css';
import PostForm from '../PostForm';
import { RobotContainer } from '../RobotContainer';
import * as api from '../../apiCalls/';


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: null
    }
  }

  componentDidMount = async () => {
    const robots = await api.fetchRobots();
    this.setState({ robots })
  }

  addRobot = async (robot) => {
    const postRobot = await api.postRobot(robot)
  }

  postRobot = async (robot) => {
    console.log('postRobot', robot)
    try {
      const response = await fetch('http://localhost:3000/api/v1/robots', {
        method: 'POST',
        body: JSON.stringify(robot),
        headers: {
          'content-type': 'application/json'
        }
      })
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Unable to add robot' + error)
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawson's Amazing Robits</h1>
        </header>
        <PostForm postRobot={this.postRobot}/>
        {
          this.state.robots &&
          <RobotContainer data={this.state.robots}/>
        }
      </div>
    );
  }
}

export default App;
