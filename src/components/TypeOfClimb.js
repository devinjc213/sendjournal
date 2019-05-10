import React from "react"

function TypeOfClimb(props){
    return (
      <main>
        <form>
          <input
            type="checkbox"
            name="boulder"
            //checked={placeholder}
            //onChange={[placeholder]}
          /> Bouldering
          <br />
          <input
            type="checkbox"
            name="toprope"
            //checked={placeholder}
            //onChange={[placeholder]}
          /> Top Rope
          <br />
          <input
            type="checkbox"
            name="lead"
            //checked={placeholder}
            //onChange={[placeholder]}
          /> Lead
          <br />
          <input
            type="checkbox"
            name="trad"
            //checked={placeholder}
            //onChange={[placeholder]}
          /> Trad
          <br />
        </form>
      </main>
    )
  }
}

export default TypeOfClimb
