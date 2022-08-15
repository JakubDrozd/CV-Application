import  { Component } from 'react';
import '../src/styles/App.css';
// import { EmailForm } from './components/EmailForm';
// import {NameForm} from "./components/NameForm"
// import {PhoneForm} from './components/PhoneForm'
import { handleSubmit } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



export class App extends Component<any, any> {
  constructor(props: any){
    super(props);
    this.state = {
      isEditable: true,
      userName: "",
      email: "",
      phoneNum: "",
      schoolName: "",
      studyTitle: "",
      dateOfStudy: "",
      companyName: "",
      positionTitle: "",
      tasks: "",
      dateFrom: "",
      dateUntil: ""
    }
  }
  render(){
    if(this.state.isEditable){
      return(
        <form>
          <fieldset>
            <legend>Registration Form</legend>
            <fieldset>
              <legend>Personal Information</legend>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" value={this.state.userName} onChange={ (event) => {
                this.setState({ userName: event.target.value })
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
            </fieldset>
            <fieldset>
              <legend>Education</legend>
              <div>
                <label htmlFor="schoolName">School Name: </label>
                <input type="text" name="schoolName" id="schoolName" value={this.state.schoolName} onChange={ (event) => { this.setState({ schoolName: event.target.value })
            }} />
              </div>
              <div>
                <label htmlFor="studyTitle">Title of study: </label>
                <input type="text" name="studyTitle" id="studyTitle" value={this.state.studyTitle} onChange={ (event) => { this.setState({ studyTitle: event.target.value })
            }} />
              </div>
              <div>
                <label htmlFor="dateOfStudy">Date of study: </label>
                <input type="date" name="dateOfStudy" id="dateOfStudy" value={this.state.dateOfStudy} onChange={ (event) => { this.setState({ dateOfStudy: event.target.value })
            }} />
              </div>
              </fieldset>
              <fieldset>
                <legend>Practical Experience</legend>
                <div>
                  <label htmlFor="companyName">Company Name: </label>
                  <input type="text" name="companyName" id="companyName" value={this.state.companyName} onChange={ (event) => { this.setState({ companyName: event.target.value })
            }}/>
                </div>
                <div>
                  <label htmlFor="positionTitle">Position Title: </label>
                  <input type="text" name="positionTitle" id="positionTitle"  value={this.state.positionTitle} onChange={ (event) => { this.setState({ positionTitle: event.target.value })
            }}/>
                </div>
                <div>
                  <label htmlFor="tasks">Main tasks: </label>
                  <textarea name="tasks" id="tasks" cols={30} rows={10} value={this.state.tasks} onChange={ (event) => { this.setState({ tasks: event.target.value })
            }}></textarea>
                </div>
                <div>
                  <label htmlFor="dateFrom">Date range of your work:  </label>
                  From: <input type="date" name="dateFrom" id="dateFrom" value={this.state.dateFrom} onChange={ (event) => { this.setState({ dateFrom: event.target.value })
            }} />
                  <p></p>
                   To: <input type="date" name="dateUntil" id="dateUntil" value={this.state.dateUntil} onChange={ (event) => { this.setState({ dateUntil: event.target.value })
            }}/>
                </div>
                <p></p>
                <Button variant="primary" onClick={handleSubmit.bind(this)}>Submit</Button>
            </fieldset>
          </fieldset>
        </form>
      )
    } else {
      return(
        <form>
          <fieldset>
            <legend>Registration Form</legend>
            <fieldset>
              <legend>Personal Information</legend>
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
            </fieldset>
            <fieldset>
              <legend>Education</legend>
              <div>
                <label htmlFor="schoolName">School Name: </label>
                <p>{this.state.schoolName}</p>
              </div>
              <div>
                <label htmlFor="studyTitle">Title of study: </label>
                <p>{this.state.studyTitle}</p>
              </div>
              <div>
                <label htmlFor="dateOfStudy">Date of study: </label>
                <p>{this.state.dateOfStudy}</p>
              </div>
              </fieldset>
              <fieldset>
                <legend>Practical Experience</legend>
                <div>
                  <label htmlFor="companyName">Company Name: </label>
                  <p>{this.state.companyName}</p>
                </div>
                <div>
                  <label htmlFor="positionTitle">Position Title: </label>
                  <p>{this.state.positionTitle}</p>
                </div>
                <div className="container">
                  <label htmlFor="tasks">Main tasks: </label>
                  <div className="tasks">{this.state.tasks}</div>
                </div>
                <div>
                  <label htmlFor="dateFrom">Date range of your work:  </label>
                  <p>{this.state.dateFrom}</p>
                  <p></p>
                  <p>{this.state.dateUntil}</p>
                </div>
                <p></p>
                <div><Button as="input" type="submit" variant="success" value="Submit"></Button></div>
            <div>
              <Button variant="danger" onClick={event => this.setState({isEditable: true})}>Edit</Button>
              </div>
            </fieldset>
          </fieldset>  
        </form>
      )
    }
  }
}