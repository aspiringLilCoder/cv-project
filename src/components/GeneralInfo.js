import React, { Component } from 'react';


class GeneralInfo extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    const { data, onInputChange } = this.props;

    return (
      <div id="GeneralInfo" className='form'>
      {/* <label htmlFor='profilePic'>Profile Picture:</label>
      <input id='profilePic' name='profilePic' type='file' onChange={onInputChange}/> */}
      <label htmlFor='name'>Name:</label>
      <input id='name' name='name' onChange={onInputChange}/>
      <label htmlFor='address'>Address:</label>
      <input id='address' name='address' onChange={onInputChange}/>
      <label htmlFor='email'>Email:</label>
      <input id='email' name='email' onChange={onInputChange}/>
      <label htmlFor='number'>Phone Number:</label>
      <input id='number' name='number' onChange={onInputChange}/>
  </div>
    )
  };
}

export default GeneralInfo;
