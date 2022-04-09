import React from "react";

export default function Personal(props) {
  return (
    <div className="personal-info-container container">
      <h3 className="heading">Personal Information</h3>
      <div className="inputs-container">
        <input className="input" placeholder="First Name"></input>
        <input className="input" placeholder="Last Name"></input>
        <input className="input" placeholder="Title"></input>
        <input className="input" placeholder="Photo"></input>
        <input className="input" placeholder="Adress"></input>
        <input className="input" placeholder="Phone number"></input>
        <input className="input" placeholder="Email" type="email"></input>
        <textarea
          className="text-area input"
          placeholder="Description"
        ></textarea>
      </div>
    </div>
  );
}
