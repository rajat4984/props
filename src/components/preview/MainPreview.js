import React from "react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

export default function MainPreview(props) {
  return (
    <div className="bottom-main-page">
      <div className="preview-desc-container  preview-container">
        <h4 className="preview-desc-heading preview-heading">Descrption</h4>
        <hr></hr>
        <p className="preview-desc-info preview-info">
          {props.stateArray[0].desc}
        </p>
      </div>

      <div className="preview-experience-container  preview-container">
        <h4 className="preview-experience-heading preview-heading">
          Experience
        </h4>
        <hr></hr>
        {props.experienceArray.map((el,i) => {
          return <ExperiencePreview stateArray={props.stateArray[i]} />;
        })}
      </div>

      <div className="preview-education-container  preview-container">
        <h4 className="preview-education-heading preview-heading">Education</h4>
        <hr></hr>
        {props.educationArray.map((el,i) => {
          return <EducationPreview stateArray={props.stateArray[i]} />;
        })}
      </div>
    </div>
  );
}
