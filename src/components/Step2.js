import React from 'react';
import Form from './FormContainer.js'

class Step2 extends React.Component {
  render() {
    if(this.props.currentStep !== 2) {
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
          checked={this.props.inOrOut === "indoor"}
          onChange={this.props.handleChange}
        /> Indoor
        <br />
        <input
          type="radio"
          name="inOrOut"
          value="outdoor"
          checked={this.props.inOrOut === "outdoor"}
          onChange={this.props.handleChange}
        /> Outdoor
      </div>
    )
  }
}

export default Step2
