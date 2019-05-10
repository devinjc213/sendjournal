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
        <br />
      </div>
    )
  }
}

export default Step3
