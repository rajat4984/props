import React from "react";
import avatarImage from "../../images/avatar.png";

export default function SidePreview(props) {
  console.log(props)
  return (
    <div className="side-page">
      <img className="avatar" src={props.imageUrl.profileImage}></img>
      <div className="preview-personal-container  preview-container">
        <h4 className="preview-personal-heading preview-heading">
          Presonal details
        </h4>
        <hr></hr>
        <div className="preview-personal-info preview-info">
          <div className="personal-info-container">
            <p className="label">Adress</p>
            <p className="preview-adress">{props.stateArray[0].adress}</p>
          </div>
          <div className="personal-info-container">
            <p className="label">Phone Number</p>
            <p className="preview-phone"> {props.stateArray[0].phone}</p>
          </div>
          <div className="personal-info-container">
            <p className="label">Email</p>
            <p className="preview-email"> {props.stateArray[0].email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
