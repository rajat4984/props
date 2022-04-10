import React from "react";

export default function Education(props) {
  return (
    <div className="education-info-container container">
      <h3 className="heading">Education</h3>
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
        <button className="input info-btn" onClick={props.educationHandler}>Add</button>
        <button className="input info-btn">Delete</button>
      </div>
    </div>
  );
}
