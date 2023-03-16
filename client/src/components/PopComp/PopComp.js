import React from "react";
import "./PopComp.css";

export default function PopComp(props) {
  return (
    <div className="popup-container">
      <div className="popup-inner">{props.children}</div>
    </div>
  );
}
