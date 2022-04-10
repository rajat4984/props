import React from "react";

export default function EducationPreview(props) {
  return (
    <div className="preview-education-info">
      <div className="dates">
        {props.inputText.eduFrom} - {props.inputText.eduTo}
      </div>
      <div className="education-info">
        <div className="preview-institute">{props.inputText.uni}</div>
        <div className="preview-degree">Degree: {props.inputText.degree}</div>
        <div className="preview-subject">{props.inputText.subject}</div>
      </div>
    </div>
  );
}
