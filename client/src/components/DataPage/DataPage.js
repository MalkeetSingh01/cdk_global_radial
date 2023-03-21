import React, { useState } from "react";
import PopComp from "../PopComp/PopComp";
import { GrMysql } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { SiOracle, SiMongodb } from "react-icons/si";

import "./DataPage.css";
import ServerForm from "../ServerForm/ServerForm";

export default function DataPage({ serverCreated, setServerCreated }) {
  const [selectedForm, setSelectedForm] = useState(null);
  return (
    <PopComp>
      <div className="heading-container">
        {selectedForm ? (
          <>
            <button
              className="back-button"
              onClick={() => setSelectedForm(null)}
            >
              Back
            </button>
            <h2 className="heading">Enter your {selectedForm} Details</h2>
          </>
        ) : (
          <h2>Select Your Database</h2>
        )}
      </div>

      <hr />

      {selectedForm ? (
        <ServerForm
          selectedForm={selectedForm}
          setServerCreated={setServerCreated}
        />
      ) : (
        <div className="data-container">
          <div className="data-card" onClick={() => setSelectedForm("SQL")}>
            <GrMysql />
          </div>
          <div
            className="data-card"
            onClick={() => setSelectedForm("Postgresql")}
          >
            <DiPostgresql />
          </div>
          <div className="data-card" onClick={() => setSelectedForm("Oracle")}>
            <SiOracle />
          </div>
          <div className="data-card" onClick={() => setSelectedForm("Mongodb")}>
            <SiMongodb />
          </div>
        </div>
      )}
    </PopComp>
  );
};
