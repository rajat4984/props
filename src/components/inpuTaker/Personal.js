import React from "react";

export default function Personal(props) {
  return (
    <div className="personal-info-container container">
      <h3 className="heading">Personal Information</h3>
      <div className="inputs-container" id={0} >
        <input
          className="input"
          placeholder="First Name"
          value={props.stateArray[0].firstName}
          onChange={props.onChangeHandler}
          name="firstName"
        ></input>
        <input
          className="input"
          placeholder="Last Name"
          value={props.stateArray[0].lastName}
          onChange={props.onChangeHandler}
          name="lastName"
        ></input>
        <input
          className="input"
          placeholder="Title"
          value={props.stateArray[0].title}
          onChange={props.onChangeHandler}
          name="title"
        ></input>
        <input
          className="input"
          placeholder="Photo"
        ></input>
        <input
          className="input"
          placeholder="Adress"
          value={props.stateArray[0].adress}
          onChange={props.onChangeHandler}
          name="adress"
        ></input>
        <input
          className="input"
          placeholder="Phone number"
          value={props.stateArray[0].phone}
          onChange={props.onChangeHandler}
          name="phone"
        ></input>
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={props.stateArray[0].email}
          onChange={props.onChangeHandler}
          name="email"
        ></input>
        <textarea
          className="text-area input"
          placeholder="Description"
          value={props.stateArray[0].desc}
          onChange={props.onChangeHandler}
          name="desc"
        ></textarea>
      </div>
    </div>
  );
}
