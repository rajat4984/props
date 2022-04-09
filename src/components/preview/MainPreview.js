import React from "react";

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
        <div className="preview-experience-info">
          <div className="dates">2010 - 2011</div>
          <div className="experience-info">
            <div className="position">Software Developer</div>
            <div className="company-name">Tata Consultency Services</div>
          </div>
        </div>
        <div className="preview-experience-info">
          <div className="dates">2010 - 2011</div>
          <div className="experience-info">
            <div className="position">Software Developer</div>
            <div className="company-name">Tata Consultency Services</div>
          </div>
        </div>
      </div>

      <div className="preview-education-container  preview-container">
        <h4 className="preview-education-heading preview-heading">
          Experience
        </h4>
        <hr></hr>
        <div className="preview-education-info">
          <div className="dates">2010 - 2011</div>
          <div className="education-info">
            <div className="preview-institute">
              Guru Harikrishan Public school
            </div>
            <div className="preview-degree">Degree: BCA</div>
            <div className="preview-subject">Computer Science</div>
          </div>
        </div>
        <div className="preview-education-info">
          <div className="dates">2010 - 2011</div>
          <div className="education-info">
            <div className="preview-institute">
              Guru Harikrishan Public school
            </div>
            <div className="preview-degree">Degree: BCA</div>
            <div className="preview-subject">Computer Science</div>
          </div>
        </div>
      </div>
    </div>
  );
}
