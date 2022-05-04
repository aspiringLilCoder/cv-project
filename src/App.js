import React, { Component } from 'react';
import Display from './components/Display';
import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Work from './components/Work';
import unknownProfile from './unknownProfile.jpg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      profilePic: unknownProfile,
      name: 'Andrew Jackson', 
      address: 'WA, 01234, Avenue',
      email: 'andrew@email.com',
      number: '1234567890',
      school: 'Wisconsin University',
      titleStudy: 'Computer Science',
      graduation: '2008',
      company: 'Tech Ride',
      position: 'Junior Full Stack Developer',
      tasks: 'Designing the frontend and backend system',
      from: '2009',
      to: '2017'
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    const {name, value} = e.target

      this.setState({
        [name]: value
      });
    
    console.log(name, value);

  
  }

  render() {
    return (
      <div id="App">
        <h1>CV Template</h1>
        <div id='main'>
          <div id='edit'>
            <GeneralInfo data={this.state} onInputChange={this.handleChange} />
            <Education data={this.state} onInputChange={this.handleChange} />
            <Work data={this.state} onInputChange={this.handleChange} />
          </div>
          <Display data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;