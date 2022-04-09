import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/" className="brand">
        {props.brand}
      </Link>
      <div className="preview">
        <Link to="PreviewContainer" className="preview-link">
          Preview
        </Link>
      </div>
    </div>
  );
}
