import React from 'react';
import Form from './FormContainer.js'

function Step3(props) {
  if(props.currentStep !== 3) {
    return null
  }

  return (
    <div>
      <label>What type of climbing will you be doing?</label>
      <br />
      <input
        type="checkbox"
        name="isBoulderChecked"
        checked={props.isBoulderChecked}
        onChange={props.handleChange}
      /> Bouldering
      <br />
      <input
        type="checkbox"
        name="isTopChecked"
        checked={props.isTopChecked}
        onChange={props.handleChange}
      /> Top Rope
      <br />
      <input
        type="checkbox"
        name="isLeadChecked"
        checked={props.isLeadChecked}
        onChange={props.handleChange}
      /> Lead
      <br />
      <input
        type="checkbox"
        name="isTradChecked"
        checked={props.isTradChecked}
        onChange={props.handleChange}
        disabled={props.inOrOut === "indoor"}
      /> Trad
      <br />
    </div>
  )
}


export default Step3
