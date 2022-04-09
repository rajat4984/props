import React from "react";

export default function PreviewHeader(props) {
  return (
    <div className="preview-header">
      <div className="preview-name">
        <h1 className="preview-first-name">
          {props.inputText.firstName} <span className="preview-last-name"> {props.inputText.lastName} </span>
        </h1>
      </div>
      <h3 className="preview-title">{props.inputText.title}</h3>
    </div>
  );
}
