import React, { Component } from 'react';
import logo from './logo.svg';
import '../src/styles/App.css';

export class App extends Component<any, any> {
  render(){
    return(
      <form>
        <fieldset>
          <legend>Registration Form</legend>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone number: </label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    )
  }
}