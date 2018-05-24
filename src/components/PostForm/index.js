import React, { Component } from 'react';
import './styles.css';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date_added: '',
      first_active: '',
      current_name: '',
      height: '',
      weight: '',
      intelligence_metric: 1
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRobot(this.state)
    this.setState({
      date_added: '',
      first_active: '',
      current_name: '',
      height: '',
      weight: '',
      intelligence_metric: 1
    })
  }

  handleChange = (e) => {
    const { name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const {
      date_added,
      first_active,
      current_name,
      height,
      weight,
      intelligence_metric
    } = this.state;

    return (
      <div className='form-container'>
        <h1>Add a new robot</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='date_added'
            placeholder='date_added'
            value= { date_added }
            onChange={ this.handleChange }
          />
          <input
             type='text'
             name='first_active'
             value={ first_active }
             placeholder='first_active'
             onChange={ this.handleChange }
           />
          <input
             type='text'
             name='current_name'
             value={ current_name }
             placeholder='current_name'
             onChange={ this.handleChange }
           />
          <input
             type='text'
             name='height'
             placeholder='height'
             value={ height }
             onChange={ this.handleChange }
           />
          <input
             type='text'
             name='weight'
             placeholder='weight'
             value={ weight }
             onChange={ this.handleChange }
           />
          <input
             type='number'
             name='intelligence_metric'
             placeholder='intelligence_metric'
             value={ intelligence_metric }
             onChange={ this.handleChange }
           />
          <button className='add-robot' type='submit'>Add Robot</button>
        </form>
      </div>
    )
  }
}
