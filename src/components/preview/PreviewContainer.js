import React from "react";

export default function PreviewContainer(props) {
  console.log(props)
  return (
    <div>
      <h1>Preview</h1>
      <p>{props.inputText.firstName}</p>
      <p>{props.inputText.lastName}</p>
      <p>{props.inputText.title}</p>
    </div>
  );
}
