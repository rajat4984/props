import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

export default function InputContainer(props) {
  return (
    <div className="main-page page-center">
      <Personal
        inputText={props.inputText}
        onChangeHandler={props.onChangeHandler}
      />
      <h3 className="heading">Experience</h3>
      {props.experienceArray.map(() => {
        return (
          <Experience
            inputText={props.inputText}
            elementDeleteHandler={props.elementDeleteHandler}
            onChangeHandler={props.onChangeHandler}
            elementAddHandler={props.elementAddHandler}
            experienceArray={props.experienceArray}
          />
        );
      })}
      <h3 className="heading">Education</h3>
      {props.educationArray.map(() => {
        return (
          <Education
            elementDeleteHandler={props.elementDeleteHandler}
            elementAddHandler={props.elementAddHandler}
            inputText={props.inputText}
            onChangeHandler={props.onChangeHandler}
            educationArray = {props.educationArray}
          />
        );
      })}
    </div>
  );
}
