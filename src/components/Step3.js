import React from 'react';
import Form from './FormContainer.js'

class Step3 extends React.Component {
  render() {
    if(this.props.currentStep !== 3) {
      return null
    }

    return (
      <div>
        <label>What type of climbing will you be doing?</label>
        <input
          type="checkbox"
          name="isBoulderChecked"
          checked={this.props.isBoulderChecked}
          onChange={this.props.handleChange}
        /> Bouldering
        <br />
        <input
          type="checkbox"
          name="isTopChecked"
          checked={this.props.isTopChecked}
          onChange={this.props.handleChange}
        /> Top Rope
        <br />
        <input
          type="checkbox"
          name="isLeadChecked"
          checked={this.props.isLeadChecked}
          onChange={this.props.handleChange}
        /> Lead
        <br />
        <input
          type="checkbox"
          name="isTradChecked"
          checked={this.props.isTradChecked}
          onChange={this.props.handleChange}
        /> Trad
        <br />
      </div>
    )
  }
}

export default Step3
