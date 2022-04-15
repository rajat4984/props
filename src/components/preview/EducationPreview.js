import React from "react";

export default function EducationPreview(props) {
  return (
    <div className="preview-education-info">
      <div className="dates">
        {props.stateArray.eduFrom} - {props.stateArray.eduTo}
      </div>
      <div className="education-info">
        <div className="preview-institute">{props.stateArray.uni}</div>
        <div className="preview-degree">Degree: {props.stateArray.degree}</div>
        <div className="preview-subject">{props.stateArray.subject}</div>
      </div>
    </div>
  );
}
