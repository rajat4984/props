import React from "react";
import MainPreview from "./MainPreview";
import PreviewHeader from "./PreviewHeader";
import SidePreview from "./SidePreview";

export default function PreviewContainer(props) {
  console.log(props);
  return (
    <div className="preview-page ">
      <PreviewHeader />
      <div className="bottom-page preview-main-page">
        <MainPreview />
        <SidePreview />
      </div>
    </div>
  );
}
