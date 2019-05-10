import React from 'react';
import Form from './FormContainer.js'

class Step1 extends React.Component {
  render() {
    if(this.props.currentStep !== 1) {
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
          checked={this.props.sessionType ===  "training"}
          onChange={this.props.handleChange}
        /> Training
        <br />
        <input
          type="radio"
          name="sessionType"
          value="climbing"
          checked={this.props.sessionType ===  "climbing"}
          onChange={this.props.handleChange}
        /> Climbing
      </div>
    )
  }
}

export default Step1
