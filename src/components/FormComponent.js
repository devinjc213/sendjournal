import React from "react";

function FormComponent(props){

  if(props.data.sessionType === ""){
    return (
      <main>
        <form>
          <input
            type="radio"
            name="sessionType"
            value="training"
            checked={props.data.sessionType ===  "training"}
            onChange={props.handleChange}
          /> Training
          <br />
          <input
            type="radio"
            name="sessionType"
            value="climbing"
            checked={props.data.sessionType ===  "climbing"}
            onChange={props.handleChange}
          /> Climbing
          <br />
        </form>
      </main>
    )
  } else if (props.data.sessionType === "training"){
    //TODO: training
  } else if (props.data.sessionType === "climbing"){
    return (
      <main>
        <form>
          <input
            type="radio"
            name="inOrOut"
            value="indoor"
            checked={props.data.inOrOut === "indoor"}
            onChange={props.handleChange}
          /> Indoor
          <br />
          <input
            type="radio"
            name="inOrOut"
            value="outdoor"
            checked={props.data.inOrOut === "outdoor"}
            onChange={props.handleChange}
          /> Outdoor
          <br />
        </form>
      </main>
    )
  }
}

export default FormComponent
