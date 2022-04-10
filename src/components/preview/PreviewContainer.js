import React from "react";
import MainPreview from "./MainPreview";
import PreviewHeader from "./PreviewHeader";
import SidePreview from "./SidePreview";

export default function PreviewContainer(props) {
  return (
    <div className="preview-page ">
      <PreviewHeader inputText={props.inputText} />
      <div className="bottom-page preview-main-page">
        <MainPreview
          educationArray={props.educationArray}
          experienceArray={props.experienceArray}
          inputText={props.inputText}
        />
        <SidePreview inputText={props.inputText} />
      </div>
    </div>
  );
}
