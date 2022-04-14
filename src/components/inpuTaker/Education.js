import React from "react";

export default function Education(props) {
  return (
    <div className="education-info-container container">
      <div className="inputs-container" id={props.id}>
        <input
          className="input"
          placeholder="University name"
          value={props.stateArray.uni}
          onChange={props.onChangeHandler}
          name="uni"
        ></input>
        <input
          className="input"
          placeholder="City"
          value={props.stateArray.eduCity}
          onChange={props.onChangeHandler}
          name="eduCity"
        ></input>
        <input
          className="input"
          placeholder="Degree"
          value={props.stateArray.degree}
          onChange={props.onChangeHandler}
          name="degree"
        ></input>
        <input
          className="input"
          placeholder="Subject"
          value={props.stateArray.subject}
          onChange={props.onChangeHandler}
          name="subject"
        ></input>
        <input
          className="input"
          placeholder="From"
          value={props.stateArray.eduFrom}
          onChange={props.onChangeHandler}
          name="eduFrom"
        ></input>
        <input
          className="input"
          placeholder="To"
          value={props.stateArray.eduTo}
          onChange={props.onChangeHandler}
          name="eduTo"
        ></input>
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
