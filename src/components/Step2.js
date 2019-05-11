import React from 'react';
import Form from './FormContainer.js'

function Step2(props) {
  if(props.currentStep !== 2) {
    return null
  }

  return (
    <div>
      <label>Indoor or Outdoor?</label>
      <br />
      <input
        type="radio"
        name="inOrOut"
        value="indoor"
        checked={props.inOrOut === "indoor"}
        onChange={props.handleChange}
      /> Indoor
      <br />
      <input
        type="radio"
        name="inOrOut"
        value="outdoor"
        checked={props.inOrOut === "outdoor"}
        onChange={props.handleChange}
      /> Outdoor
    </div>
  )
}


export default Step2
