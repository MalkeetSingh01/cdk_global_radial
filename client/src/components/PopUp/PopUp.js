import React, { useState, useEffect } from "react";
import "./popup.css";
import icon from "../../assets/images/person-circle.svg";
import Form from "./Form/Form";
import MapTable from "./MapTable/MapTable";
import Axios from "axios";



export default function PopUp(props) {
  return (
    props.Trigger && (
      <div className="popup-container">
        <div className="popup-inner">
          <div className="top-bar">
            <h3>SEARCH</h3>
            <img src={icon} alt="user" />
          </div>
          <div className="input-container">
            <Form />
          </div>
          <div className="table-container">
            <MapTable />
          </div>
          <div className="close-button">
            <button onClick={() => props.setTrigger(false)}>Close</button>
          </div>
        </div>
      </div>
    )
  );
}
