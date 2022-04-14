import React from "react";
import MainPreview from "./MainPreview";
import PreviewHeader from "./PreviewHeader";
import SidePreview from "./SidePreview";

export default function PreviewContainer(props) {
  return (
    <div className="preview-page ">
      <PreviewHeader stateArray={props.stateArray} />
      <div className="bottom-page preview-main-page">
        <MainPreview
          stateArray={props.stateArray}
          educationArray={props.educationArray}
          experienceArray={props.experienceArray}
          inputText={props.inputText}
        />
        <SidePreview stateArray={props.stateArray} />
      </div>
    </div>
  );
}
