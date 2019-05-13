import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

function Boulder(props) {
  return (
    <div>
      <form>
        <input
          type="checkbox"
        /> Project?
        <br />
        Grade:
        <select name="grade">
          <option value="V0">V0</option>
          <option value="V1">V1</option>
          <option value="V2">V2</option>
          <option value="V3">V3</option>
          <option value="V4">V4</option>
          <option value="V5">V5</option>
          <option value="V6">V6</option>
          <option value="V7">V7</option>
          <option value="V8">V8</option>
          <option value="V9">V9</option>
          <option value="V10">V10</option>
          <option value="V11">V11</option>
          <option value="V12">V12</option>
          <option value="V13">V13</option>
          <option value="V14">V14</option>
          <option value="V15">V15</option>
          <option value="V16">V16</option>
        </select>
        <br />
        Date of ascent:
        <DatePicker
            selected={props.startDate}
            onChange={props.handleDateChange}
        />
      </form>
    </div>
  )
}

export default Boulder
