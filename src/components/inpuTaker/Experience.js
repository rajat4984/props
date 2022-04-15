import React from "react";

export default function Experience(props) {
  return (
    <div className="experience-info-container container">
      <div className="inputs-container">
        <input
          className="input"
          placeholder="Position"
          value={props.stateArray.expPosition}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="expPosition"
        />
        <input
          className="input"
          placeholder="Company"
          value={props.stateArray.expCompany}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="expCompany"
        />
        <input
          className="input"
          placeholder="City"
          value={props.stateArray.expCity}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="expCity"
        />
        <input
          className="input"
          placeholder="From"
          value={props.stateArray.expFrom}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="expFrom"
        />
        <input
          className="input"
          placeholder="To"
          value={props.stateArray.expTo}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="expTo"
        />
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
