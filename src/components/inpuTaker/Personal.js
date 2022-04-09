import React from "react";

export default function Personal(props) {
  return (
    <div className="personal-info-container container">
      <h3 className="heading">Personal Information</h3>
      <div className="inputs-container">
        <input
          className="input"
          placeholder="First Name"
          value={props.inputText.firstName}
          onChange={props.onChangeHandler}
          name="fname"
        ></input>
        <input
          className="input"
          placeholder="Last Name"
          value={props.inputText.lastName}
          onChange={props.onChangeHandler}
          name="lname"
        ></input>
        <input
          className="input"
          placeholder="Title"
          value={props.inputText.title}
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
          value={props.inputText.adress}
          onChange={props.onChangeHandler}
          name="adress"
        ></input>
        <input
          className="input"
          placeholder="Phone number"
          value={props.inputText.phone}
          onChange={props.onChangeHandler}
          name="phone"
        ></input>
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={props.inputText.email}
          onChange={props.onChangeHandler}
          name="email"
        ></input>
        <textarea
          className="text-area input"
          placeholder="Description"
          value={props.inputText.desc}
          onChange={props.onChangeHandler}
          name="desc"
        ></textarea>
      </div>
    </div>
  );
}
