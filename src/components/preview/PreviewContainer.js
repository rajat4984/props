import React from "react";
import MainPreview from "./MainPreview";
import PreviewHeader from "./PreviewHeader";
import SidePreview from "./SidePreview";

export default function PreviewContainer(props) {
  console.log("In previewcontainer");
  console.log(props);
  return (
    <div className="preview-page ">
      <PreviewHeader inputText={props.inputText} />
      <div className="bottom-page preview-main-page">
        <MainPreview inputText={props.inputText} />
        <SidePreview inputText={props.inputText} />
      </div>
    </div>
  );
}
