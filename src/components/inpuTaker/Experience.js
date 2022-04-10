import React from "react";

export default function Experience(props) {
  return (
    <div className="experience-info-container container">
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
        <button
          className=" input info-btn"
          name="expAddBtn"
          onClick={props.elementAddHandler}
        >
          Add
        </button>
        <button
          className=" input info-btn"
          name="expDeleteBtn"
          onClick={props.elementDeleteHandler}
          disabled={props.experienceArray.length < 2 ? true : false}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
