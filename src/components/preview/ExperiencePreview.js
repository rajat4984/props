import React from "react";

export default function ExperiencePreview(props) {
  return (
    <div className="preview-experience-info">
      <div className="dates">
        {props.stateArray.expFrom} - {props.stateArray.expTo}
      </div>
      <div className="experience-info">
        <div className="position">{props.stateArray.expPosition}</div>
        <div className="company-name">{props.stateArray.expCompany}</div>
      </div>
    </div>
  );
}
