import React, { Component } from 'react';
import './App.css';
import PostForm from '../PostForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: null
    }
  }

  componentDidMount() {
    this.fetchRobots()
  }

  fetchRobots = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/robots');
      const data = await response.json();
      const robots = this.setState({ robots: data })
    } catch (error) {
      throw new Error(error)
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawson's Amazing Robits</h1>
        </header>
        <PostForm />
      </div>
    );
  }
}

export default App;
