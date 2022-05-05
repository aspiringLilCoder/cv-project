import React from 'react';

const Education = (props) => {
    const { data, onInputChange } = props;


    return (
      <div id="Education" className='form'>
        <h2>Education:</h2>
        <label htmlFor='school'>School:</label>
        <input id='school' name='school' onChange={onInputChange}/>
        <label htmlFor='titleStudy'>Title of Study:</label>
        <input id='titleStudy' name='titleStudy' onChange={onInputChange}/>
        <label htmlFor='graduation'>Graduation Year:</label>
        <input id='graduation' name='graduation' type='number' onChange={onInputChange}/>
      </div>
    );
  };
  
  export default Education;