import React from 'react';
import Form from './FormContainer.js'

function Step1(props) {
  if(props.currentStep !== 1) {
    return null
  }

  return (
    <div>
      <label>Training or Climbing?</label>
      <br />
      <input
        type="radio"
        name="sessionType"
        value="training"
        checked={props.sessionType ===  "training"}
        onChange={props.handleChange}
      /> Training
      <br />
      <input
        type="radio"
        name="sessionType"
        value="climbing"
        checked={props.sessionType ===  "climbing"}
        onChange={props.handleChange}
      /> Climbing
    </div>
  )
}


export default Step1
