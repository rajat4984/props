import React from "react";

export default function Education() {
  return (
    <div className="education-info-container container">
      <h3 className="heading">Education</h3>
      <div className="inputs-container">
        <input className="input" placeholder="University name"></input>
        <input className="input" placeholder="City"></input>
        <input className="input" placeholder="Degree"></input>
        <input className="input" placeholder="Subject"></input>
        <input className="input" placeholder="From"></input>
        <input className="input" placeholder="To"></input>
        <button className="input info-btn">Add</button>
        <button className="input info-btn">Delete</button>
      </div>
    </div>
  );
}
