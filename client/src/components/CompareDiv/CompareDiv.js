import "./CompareDiv.css";
import { TextField, Button } from "@mui/material";
import { data } from "../../assets/data";
import styled from "@emotion/styled";
import { useState } from "react";
import PopUp from "../PopUp/PopUp";

const TextDiv = styled(TextField)`
  width: 70%;
  height: 80%;
`;
const ButtonDiv = styled(Button)`
  width: 20%;
  height: 100%;
`;

const CompareDiv = ({ setComparePop }) => {
  const onTargetClick = (e) => {};

  const [popUpbutoon, setPopupbutoon] = useState(false);

  return (
    <div className="compareDiv">
      <div className="headerDiv">Compare Data</div>
      <div className="compareBox">
        <div className="compareDivItem">
          <div className="compareDivItem-header">Source</div>
          <div className="compareDivItem-sch">
            <TextDiv id="outlined-basic" label="Config-id" variant="outlined" />
            <ButtonDiv variant="contained" onClick={() => setPopupbutoon(true)}>
              Data
            </ButtonDiv>
          </div>
          <div className="dataItemDiv titleDiv">
            <div>Column_name</div>
            <div>Column_type</div>
            <div>Type</div>
          </div>
          <div className="overflowDiv">
            {data.map((data, index) => {
              return (
                <div key={index} className="dataItemDiv">
                  <div className="dataItemDiv-data">{data.column_name}</div>
                  <div className="dataItemDiv-data">{data.column_type}</div>
                  <div className="dataItemDiv-data">{data.type}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="compare-button" onClick={() => setComparePop(true)}>
          Compare
        </div>
        <div className="compareDivItem">
          <div className="compareDivItem-header">Target</div>
          <div className="compareDivItem-sch">
            <TextDiv
              id="outlined-basic"
              label="Config-id"
              variant="outlined"
              name="target-box"
              onClick={(e) => {
                onTargetClick();
              }}
            />
            <ButtonDiv variant="contained" onClick={() => setPopupbutoon(true)}>
              Data
            </ButtonDiv>
          </div>
          <div className="dataItemDiv titleDiv">
            <div>Column_name</div>
            <div>Column_type</div>
            <div>Type</div>
          </div>
          <div className="overflowDiv">
            {data.map((data, index) => {
              return (
                <div key={index} className="dataItemDiv">
                  <div className="dataItemDiv-data">{data.column_name}</div>
                  <div className="dataItemDiv-data">{data.column_type}</div>
                  <div className="dataItemDiv-data">{data.type}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <PopUp Trigger={popUpbutoon} setTrigger={setPopupbutoon} />
    </div>
  );
};
export default CompareDiv;