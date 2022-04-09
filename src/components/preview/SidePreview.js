import React from "react";
import avatarImage from "../../images/avatar.png";

export default function SidePreview(props) {
  return (
    <div className="side-page">
      <img className="avatar" src={avatarImage}></img>
      <div className="preview-personal-container  preview-container">
        <h4 className="preview-personal-heading preview-heading">
          Presonal details
        </h4>
        <hr></hr>
        <div className="preview-personal-info preview-info">
          <div className="personal-info-container">
            <p className="label">Adress</p>
            <p className="preview-adress">{props.inputText.adress}</p>
          </div>
          <div className="personal-info-container">
            <p className="label">Phone Number</p>
            <p className="preview-phone"> {props.inputText.phone}</p>
          </div>
          <div className="personal-info-container">
            <p className="label">Email</p>
            <p className="preview-email"> {props.inputText.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
