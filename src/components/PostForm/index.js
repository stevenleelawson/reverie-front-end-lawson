import React, { Component } from 'react';
import './styles.css';

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      date_added: '',
      first_active: '',
      current_name: '',
      height: '',
      weight: '',
      intelliegence_metric: null
    }
  }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.createThought(this.state)
  //   this.setState({ title: '', body: ''})
  // }

  handleChange = (e) => {
    const { name, value} = e.target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ })
  }

  render() {
    const {
      date_added,
      first_active,
      current_name,
      height,
      weight,
      intelliegence_metric
    } = this.state;

    return (
      <div className='form-container'>
        <h1>Add a new robit</h1>
        <form>
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
             name='intelliegence_metric'
             placeholder='intelliegence_metric'
             value={ intelliegence_metric }
             onChange={ this.handleChange }
           />
          <button type='submit'>Add Robit</button>
        </form>
      </div>
    )
  }
}
