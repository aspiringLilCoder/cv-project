import React from 'react';

const Display = (props) => {
    const {profilePic, name, address, email, number, school, titleStudy, graduation, company, position, tasks, from, to} = props.data;

    return (
        <div id="display">
        <div id='generalDisplay'>
            {/* <img src={profilePic} id='profilePic' /> */}
            <div id='info'>
                <p id='displayName'>{name}</p>
                <p>{address}</p>
                <p>{email}</p>
                <p>{number}</p>
            </div>
        </div>
        <hr />
        <h2>My Educational Background:</h2>
        <div id='educationDisplay'>
            <p>School Name: {school}</p>
            <p>Title of Study: {titleStudy}</p>
            <p>Year of Graduation: {graduation}</p>
        </div>
        <hr />
        <h2>My Work Experience:</h2>
        <div id='workDisplay'>
            <p>Company Name: {company}</p>
            <p>Job Position: {position}</p>
            <p>Main Tasks of the Job: {tasks}</p>
            <p>Worked from {from} to {to}</p>
        </div>
    </div>
    );
  };
  
  export default Display;