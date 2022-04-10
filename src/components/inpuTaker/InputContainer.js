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
      {props.experienceArray.map(() => {
        return (
          <Experience
            inputText={props.inputText}
            onChangeHandler={props.onChangeHandler}
            experienceHandler={props.experienceHandler}
          />
        );
      })}
      {props.educationArray.map(() => {
        return (
          <Education
            educationHandler={props.educationHandler}
            inputText={props.inputText}
            onChangeHandler={props.onChangeHandler}
          />
        );
      })}
    </div>
  );
}
