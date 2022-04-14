import React from "react";

export default function PreviewHeader(props) {
  return (
    <div className="preview-header">
      <div className="preview-name">
        <h1 className="preview-first-name">
          {props.stateArray[0].firstName} <span className="preview-last-name"> {props.stateArray[0].lastName} </span>
        </h1>
      </div>
      <h3 className="preview-title">{props.stateArray[0].title}</h3>
    </div>
  );
}
