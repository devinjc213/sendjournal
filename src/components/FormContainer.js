import React from 'react';
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStep: 1,
      sessionType: "",
      inOrOut: "",
      climbingType: []
    }

    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  _next() {
    let currentStep = this.state.currentStep

    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep

    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton() {
    let currentStep = this.state.currentStep

    if(currentStep !== 1){
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}>
        Previous
        </button>
      )
    }

    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep
    if(currentStep === 1 && this.state.sessionType.length > 0) {
      var isEnabled = true
    } else if (currentStep === 2 && this.state.inOrOut.length > 0) {
      var isEnabled = true
    }

    if(currentStep < 3){
      return (
        <button
          className="btn btn-primary"
          type="button"
          onClick={this._next}
          disabled={!isEnabled}>
        Next
        </button>
      )
    }

    return null;
  }

  handleChange(e) {
    const {name, value, type, checked} = e.target

    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
    :
      this.setState({
        [name]: value
      })

    console.log(this.state)
  }

  render(){
    return (
      <React.Fragment>
      <h1>A Wizard Form</h1>
      <p>Step {this.state.currentStep}</p>

      <form onSubmit={this.handleSubmit}>
        <Step1
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          sessionType={this.state.sessionType}
        />
        <Step2
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          inOrOut={this.state.inOrOut}
        />
        <Step3
          currentStep={this.state.currentStep}
        />

        {this.previousButton}
        {this.nextButton}

      </form>
      </React.Fragment>
    );
  }
}

export default Form
