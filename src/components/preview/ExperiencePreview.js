import React from "react";

export default function ExperiencePreview(props) {
  return (
    <div className="preview-experience-info">
      <div className="dates">
        {props.inputText.expFrom} - {props.inputText.expTo}
      </div>
      <div className="experience-info">
        <div className="position">{props.inputText.expPosition}</div>
        <div className="company-name">{props.inputText.expCompany}</div>
      </div>
    </div>
  );
}
