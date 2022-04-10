import React from "react";
import ExperiencePreview from "./ExperiencePreview";

export default function MainPreview(props) {
  return (
    <div className="bottom-main-page">
      <div className="preview-desc-container  preview-container">
        <h4 className="preview-desc-heading preview-heading">Descrption</h4>
        <hr></hr>
        <p className="preview-desc-info preview-info">
          {props.inputText.desc}
        </p>
      </div>

      <div className="preview-experience-container  preview-container">
        <h4 className="preview-experience-heading preview-heading">
          Experience
        </h4>
        <hr></hr>
        {props.experienceArray.map(()=>{
          <ExperiencePreview inputText={props.inputText}/>
        })}
        
      </div>

      <div className="preview-education-container  preview-container">
        <h4 className="preview-education-heading preview-heading">
          Education
        </h4>
        <hr></hr>
        <div className="preview-education-info">
          <div className="dates">{props.inputText.eduFrom} - {props.inputText.eduTo}</div>
          <div className="education-info">
            <div className="preview-institute">
            {props.inputText.uni}
            </div>
            <div className="preview-degree">Degree: {props.inputText.degree}</div>
            <div className="preview-subject">{props.inputText.subject}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
