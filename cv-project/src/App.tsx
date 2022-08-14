import React, { Component, useState } from 'react';
import '../src/styles/App.css';
import { EmailForm } from './components/EmailForm';
import {NameForm} from "./components/NameForm"
import {PhoneForm} from './components/PhoneForm'
import { handleSubmit } from './utils';

export class App extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {
      isEditable: true,
      userName: "",
      email: "",
      phoneNum: ""
    }
  }
  render(){
    if(this.state.isEditable){
      return(
        <form onSubmit={handleSubmit.bind(this)}>
          <fieldset>
            <legend>Registration Form</legend>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" value={this.state.userName} onChange={ (event) => { this.setState({ userName: event.target.value })
            }}/>
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={ (event) => { this.setState({ email: event.target.value })
            }}/>
            </div>
            <div>
              <label htmlFor="phone">Phone number: </label>
              <input type="tel" id="phone" name="phone" value={this.state.phoneNum} onChange={ (event) => { this.setState({ phoneNum: event.target.value })
            }}/>
            </div>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      )
    } else {
      return(
        <form>
          <fieldset>
            <legend>Registration Form</legend>
            <div>
              <label htmlFor="name">Name: </label>
              <p>{this.state.userName}</p>
            </div>
            <div>
              <label htmlFor="email">E-mail: </label>
              <p>{this.state.email}</p>
            </div>
            <div>
              <label htmlFor="phone">Phone number: </label>
              <p>{this.state.phoneNum}</p>
            </div>
            <input type="submit" value="Submit" />
            <input type="button" value="Edit" onClick={event => this.setState({isEditable: true})}/>
          </fieldset>
        </form>
      )
    }
  }
}