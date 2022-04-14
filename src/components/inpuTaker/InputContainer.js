import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

export default function InputContainer(props) {
  return (
    <div className="main-page page-center">
      <Personal
        stateArray={props.stateArray}
        inputText={props.inputText}
        onChangeHandler={props.onChangeHandler}
      />
      <h3 className="heading">Experience</h3>
      {props.experienceArray.map((el, i) => {
        return (
          <Experience
            id={i}
            inputText={props.inputText}
            stateArray={props.stateArray[i]}
            elementDeleteHandler={props.elementDeleteHandler}
            onChangeHandler={props.onChangeHandler}
            elementAddHandler={props.elementAddHandler}
            experienceArray={props.experienceArray}
          />
        );
      })}
      <h3 className="heading">Education</h3>
      {props.educationArray.map((el, i) => {
        console.log(i);
        return (
          <Education
            id={i}
            stateArray={props.stateArray[i]}
            elementDeleteHandler={props.elementDeleteHandler}
            elementAddHandler={props.elementAddHandler}
            onChangeHandler={props.onChangeHandler}
            educationArray={props.educationArray}
          />
        );
      })}
    </div>
  );
}
