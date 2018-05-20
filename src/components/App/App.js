import React, { Component } from 'react';
import './App.css';
import PostForm from '../PostForm';
import { RobotContainer } from '../RobotContainer';
import * as api from '../../apiCalls/';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: null
    }
  }

  componentDidMount = async () => {
    const robots = await api.fetchRobots();
    this.setState({ robots })
    console.log(this.state)
  }

  addRobot = async (robot) => {
    const response = await api.postRobot(robot);
    const robots = await api.fetchRobots();
    this.setState({ robots })
    return response;
  }

  removeRobot = async (id) => {
    const response = await api.deleteRobot(id);
    const robots = await api.fetchRobots();
    this.setState({ robots })
    return response;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawson's Amazing Robits</h1>
        </header>
        <PostForm addRobot={this.addRobot}/>
        {
          this.state.robots &&
          <RobotContainer
            data={this.state.robots}
            removeRobot={this.removeRobot}
          />
        }
      </div>
    );
  }
}

export default App;
