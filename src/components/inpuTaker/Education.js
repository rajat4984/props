import React from "react";

export default function Education(props) {
  return (
    <div className="education-info-container container">
      <div className="inputs-container">
        <input
          className="input"
          placeholder="University name"
          value={props.stateArray.uni}
          onChange={event => props.onChangeHandler(props.id,event)}
          name="uni"
        />
        <input
          className="input"
          placeholder="City"
          value={props.stateArray.eduCity}
          onChange={event => props.onChangeHandler(props.id,event)}
          name="eduCity"
        />
        <input
          className="input"
          placeholder="Degree"
          value={props.stateArray.degree}
          onChange={event => props.onChangeHandler(props.id,event)}
          name="degree"
        />
        <input
          className="input"
          placeholder="Subject"
          value={props.stateArray.subject}
          onChange={event => props.onChangeHandler(props.id,event)}
          name="subject"
        />
        <input
          className="input"
          placeholder="From"
          value={props.stateArray.eduFrom}
          onChange={event => props.onChangeHandler(props.id,event)}
          name="eduFrom"
        />
        <input
          className="input"
          placeholder="To"
          value={props.stateArray.eduTo}
          onChange={event => props.onChangeHandler(props.id,event)}
          name="eduTo"
        />
        <button
          className="input info-btn"
          name="eduAddBtn"
          onClick={props.elementAddHandler}
        >
          Add
        </button>
        <button
          className="input info-btn"
          name="eduDeleteBtn"
          onClick={props.elementDeleteHandler}
          disabled={props.educationArray.length < 2 ? true : false}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
