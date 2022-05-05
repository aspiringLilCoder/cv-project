import React, { useState } from "react";
import Display from './components/Display';
import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Work from './components/Work';
import unknownProfile from './unknownProfile.jpg';


const App = () => {
  const [data, setData] = useState({
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
  });

  const handleChange = (e) => {
    const {name, value} = e.target
     setData({
       ...data,
        [name]: value
      });
  }

  return (
    <div id="App">
    <h1>CV Template</h1>
    <div id='main'>
      <div id='edit'>
        <GeneralInfo data={data} onInputChange={handleChange} />
        <Education data={data} onInputChange={handleChange} />
        <Work data={data} onInputChange={handleChange} />
      </div>
      <Display data={data} />
    </div>
  </div>
  );
};

export default App;