import React, { Component } from 'react';
import './form.css';

import SiteButton from '../common/button';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className='form-holder'>
        <div className='container'>
          <h2>Log in</h2>
          <div>We haven't tracked you in awhile</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='input-holder'>
            <label htmlFor='email'>Email:</label>
            <input
              data-testid='email'
              type='email'
              id='email'
              placeholder='you@you.com'
              required
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className='input-holder'>
            <label htmlFor='password'>Password:</label>
            <input
              data-testid='password'
              type='password'
              id='password'
              placeholder='your password'
              required
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className='container'>
            <SiteButton type='submit' text='Let us track you' />
          </div>
        </form>
      </div>
    );
  }
}

export default LogInForm;
