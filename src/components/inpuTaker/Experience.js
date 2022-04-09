import React from "react";

export default function Experience() {
  return (
    <div className="experience-info-container container">
      <h3 className="heading">Experience</h3>
      <div className="inputs-container">
        <input
          className="input"
          placeholder="Position"
          id="position-input"
        ></input>
        <input className="input" placeholder="Company"></input>
        <input className="input" placeholder="City"></input>
        <input className="input" placeholder="From"></input>
        <input className="input" placeholder="To"></input>
        <button className=" input info-btn">Add</button>
        <button className=" input info-btn">Delete</button>
      </div>
    </div>
  );
}
