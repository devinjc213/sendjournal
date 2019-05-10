import React from 'react';
import FormComponent from "./FormComponent.js"
import TypeOfClimb from "./TypeOfClimb.js"

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      sessionType: "",
      inOrOut: "",
      isBoulderChecked: false,
      isTopChecked: false,
      isLeadChecked: false,
      isTradChecked: false
    }

    this.handleChange = this.handleChange.bind(this)
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
      <div>
        <FormComponent
          handleChange={this.handleChange}
          data={this.state}
        />
      </div>
    );
  }
}

export default Form
