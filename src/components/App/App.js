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

  // fetchRobots = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/v1/robots');
  //     const data = await response.json();
  //     const robots = this.setState({ robots: data })
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawson's Amazing Robits</h1>
        </header>
        <PostForm />
        {
          this.state.robots &&
          <RobotContainer data={this.state.robots}/>
        }
      </div>
    );
  }
}

export default App;
