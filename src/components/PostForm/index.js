import React, { Component } from 'react';
import './styles.css';

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className='form-container'>
        <h1>Add a new robit</h1>
        <form>
          <input type='text' placeholder='date_added'/>
          <input type='text' placeholder='first_active'/>
          <input type='text' placeholder='current_name'/>
          <input type='text' placeholder='height'/>
          <input type='text' placeholder='weight'/>
          <input type='number' placeholder='intelliegence_metric'/>
          <button type='submit'>Add Robit</button>
        </form>
      </div>
    )
  }
}
