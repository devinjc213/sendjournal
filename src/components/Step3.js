import React from 'react';
import Form from './FormContainer.js'

class Step3 extends React.Component {
  render() {
    if(this.props.currentStep !== 1) {
      return null
    }

    return (
      <div>

      </div>
    )
  }
}

export default Step3
