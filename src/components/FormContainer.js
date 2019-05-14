git import React from 'react';
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'
import Boulder from './Boulder.js'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStep: 1,
      sessionType: "",
      inOrOut: "",
      isBoulderChecked: false,
      isTopChecked: false,
      isLeadChecked: false,
      isTradChecked: false,
      startDate: new Date()
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    let booleans = [this.state.isBoulderChecked, this.state.isTopChecked,
                    this.state.isLeadChecked, this.state.isTradChecked]
    let isEnabled = false

    if(currentStep === 1 && this.state.sessionType.length > 0) {
      isEnabled = true
    } else if (currentStep === 2 && this.state.inOrOut.length > 0) {
      isEnabled = true
    } else if (currentStep === 3 && booleans.some(function (item) {return item === true})) {
      isEnabled = true
    }

    if(currentStep < 4){
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

  handleDateChange(date){
    this.setState({
      startDate: date
    });
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

  handleSubmit = (e) => {
    e.preventDefault()
    const {sessionType, inOrOut, isBoulderChecked, isTopChecked, isLeadChecked, isTradChecked} = this.state
    alert(`State:
      Session: ${sessionType}
      inOut: ${inOrOut}
      isBlouder: ${isBoulderChecked}
      isTop: ${isTopChecked}
      isLead: ${isLeadChecked}
      isTrad: ${isTradChecked}`)
  }

  render(){
    return (
      <React.Fragment>
      <h1>New Session</h1>
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
          handleChange={this.handleChange}
          isBoulderChecked={this.state.isBoulderChecked}
          isTopChecked={this.state.isTopChecked}
          isLeadChecked={this.state.isLeadChecked}
          isTradChecked={this.state.isTradChecked}
          inOrOut={this.state.inOrOut}
        />

        {this.previousButton}
        {this.nextButton}
        <br />
        <input type="submit" value="Submit"/>

      </form>
      </React.Fragment>
    );
  }
}

export default Form
