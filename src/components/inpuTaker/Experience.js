import React from "react";

export default function Experience(props) {
  return (
    <div className="experience-info-container container">
      <h3 className="heading">Experience</h3>
      <div className="inputs-container">
        <input
          className="input"
          placeholder="Position"
          value={props.inputText.expPosition}
          onChange={props.onChangeHandler}
          name="expPosition"
        ></input>
        <input
          className="input"
          placeholder="Company"
          value={props.inputText.expCompany}
          onChange={props.onChangeHandler}
          name="expCompany"
        ></input>
        <input
          className="input"
          placeholder="City"
          value={props.inputText.expCity}
          onChange={props.onChangeHandler}
          name="expCity"
        ></input>
        <input
          className="input"
          placeholder="From"
          value={props.inputText.expFrom}
          onChange={props.onChangeHandler}
          name="expFrom"
        ></input>
        <input
          className="input"
          placeholder="To"
          value={props.inputText.expTo}
          onChange={props.onChangeHandler}
          name="expTo"
        ></input>
        <button className=" input info-btn" onClick={props.experienceHandler}>Add</button>
        <button className=" input info-btn">Delete</button>
      </div>
    </div>
  );
}
