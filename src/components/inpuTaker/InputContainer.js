import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

export default function InputContainer(props) {
  return (
    <div className="main-page page-center">
      <Personal inputText = {props.inputText} onChangeHandler={props.onChangeHandler} />
      <Experience />
      <Education />
    </div>
  );
}
