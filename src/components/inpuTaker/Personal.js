import React from "react";

export default function Personal(props) {
  return (
    <div className="personal-info-container container">
      <h3 className="heading">Personal Information</h3>
      <div className="inputs-container">
        <input
          className="input"
          placeholder="First Name"
          value={props.stateArray[0].firstName}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="firstName"
        />
        <input
          className="input"
          placeholder="Last Name"
          value={props.stateArray[0].lastName}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="lastName"
        />
        <input
          className="input"
          placeholder="Title"
          value={props.stateArray[0].title}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="title"
        />
        <input className="input" placeholder="Photo" type="file" onChange={props.imageChangeHandler}/>
        <input
          className="input"
          placeholder="Adress"
          value={props.stateArray[0].adress}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="adress"
        />
        <input
          className="input"
          placeholder="Phone number"
          value={props.stateArray[0].phone}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="phone"
        />
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={props.stateArray[0].email}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="email"
        />
        <textarea
          className="text-area input"
          placeholder="Description"
          value={props.stateArray[0].desc}
          onChange={(event) => props.onChangeHandler(props.id, event)}
          name="desc"
        ></textarea>
      </div>
    </div>
  );
}
