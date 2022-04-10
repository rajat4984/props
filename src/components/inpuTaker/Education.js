import React from "react";

export default function Education(props) {
  return (
    <div className="education-info-container container">
      <div className="inputs-container">
        <input
          className="input"
          placeholder="University name"
          value={props.inputText.uni}
          onChange={props.onChangeHandler}
          name="uni"
        ></input>
        <input
          className="input"
          placeholder="City"
          value={props.inputText.eduCity}
          onChange={props.onChangeHandler}
          name="eduCity"
        ></input>
        <input
          className="input"
          placeholder="Degree"
          value={props.inputText.degree}
          onChange={props.onChangeHandler}
          name="degree"
        ></input>
        <input
          className="input"
          placeholder="Subject"
          value={props.inputText.subject}
          onChange={props.onChangeHandler}
          name="subject"
        ></input>
        <input
          className="input"
          placeholder="From"
          value={props.inputText.eduFrom}
          onChange={props.onChangeHandler}
          name="eduFrom"
        ></input>
        <input
          className="input"
          placeholder="To"
          value={props.inputText.eduTo}
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
