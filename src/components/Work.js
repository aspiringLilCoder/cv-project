import React from 'react';

const Work = (props) => {
    const { data, onInputChange } = props;


    return (
      <div id="Work" className='form'>
      <h2>Work:</h2>
      <label htmlFor='company'>Company Name:</label>
      <input id='company' name='company' onChange={onInputChange}/>
      <label htmlFor='position'>Position Title:</label>
      <input id='position' name='position' onChange={onInputChange}/>
      <label htmlFor='tasks'>Main Tasks of the job:</label>
      <input id='tasks' name='tasks' onChange={onInputChange}/>
      <label htmlFor='from'>Worked from:</label>
      <input id='from' name='from' type='date' onChange={onInputChange}/>
      <label htmlFor='to'>To:</label>
      <input id='to' name='to' type='date'  onChange={onInputChange}/>
  </div>
    );
  };
  
  export default Work;