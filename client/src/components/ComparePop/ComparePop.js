// import React from "react";
// import PopComp from "../PopComp/PopComp";
// import "./ComparePop.css";

// export default function ComparePop() {
//   return (
//     <PopComp>
//       <div className="comphead">
//         <h2>Comparison</h2>
//       </div>
//       <hr />
//     </PopComp>
//   );
// }

// import React, { useCallback, useMemo, useRef, useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import PopComp from "../PopComp/PopComp";

// import "./ComparePop.css";

// export default function ComparePop() {
//   const gridRef = useRef();
//   const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
//   const gridStyle = useMemo(
//     () => ({ height: "50vh", width: "100%", padding: "1rem" }),
//     []
//   );
//   const [rowData, setRowData] = useState([
//     { Column_Name: "Toyota", Data_Types: "Celica" },
//     { Column_Name: "Ford", Data_Types: "Mondeo" },
//     { Column_Name: "Porsche", Data_Types: "Boxster" },
//   ]);
//   const defaultColDef = useMemo(() => {
//     return {
//       editable: true,
//       resizable: true,
//       minWidth: 100,
//       flex: 1,
//     };
//   }, []);
//   const popupParent = useMemo(() => {
//     return document.body;
//   }, []);
//   const [columnDefs, setColumnDefs] = useState([
//     { field: "Column_Name", suppressSizeToFit: true },
//     { field: "Data_Types", suppressSizeToFit: true },
//   ]);

//   // const onBtnExport = useCallback(() => {
//   //   gridRef.current.api.exportDataAsCsv();
//   // }, []);

//   // const onBtnUpdate = useCallback(() => {
//   //   document.querySelector("#csvResult").value =
//   //     gridRef.current.api.getDataAsCsv();
//   // }, []);

//   return (
//     <PopComp>
//       <div style={containerStyle} className="table-container">
//         <div style={gridStyle} className="ag-theme-alpine">
//           <AgGridReact
//             style={{ width: "100%", height: "100%;" }}
//             rowData={rowData}
//             columnDefs={columnDefs}
//           ></AgGridReact>
//         </div>
//       </div>
//     </PopComp>
//   );
// }
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import PopComp from "../PopComp/PopComp";
import { AiOutlineDownload } from "react-icons/ai";
import "./ComparePop.css";

const columnDefs = [
  { headerName: "Source Column", field: "sourceColumn" },
  { headerName: "Source Data Type", field: "sourceDataType" },
  { headerName: "Target Column", field: "targetColumn" },
  { headerName: "Target Data Type", field: "targetDataType" },
];

const rowData = [
  {
    sourceColumn: "Name",
    sourceDataType: "String",
    targetColumn: "First Name",
    targetDataType: "String",
  },
  {
    sourceColumn: "Age",
    sourceDataType: "Number",
    targetColumn: "Age",
    targetDataType: "Number",
  },
  {
    sourceColumn: "Email",
    sourceDataType: "String",
    targetColumn: "Email Address",
    targetDataType: "String",
  },
  {
    sourceColumn: "Address",
    sourceDataType: "String",
    targetColumn: "Postal Address",
    targetDataType: "String",
  },
];

const isMismatched = (data) => {
  return (
    data.sourceColumn !== data.targetColumn ||
    data.sourceDataType !== data.targetDataType
  );
};

const getRowStyle = (params) => {
  return isMismatched(params.data) ? { backgroundColor: "salmon" } : {};
};

const downloadCsv = (gridApi) => {
  const params = {
    suppressQuotes: true,
    columnSeparator: ",",
    columnKeys: [
      "sourceColumn",
      "sourceDataType",
      "targetColumn",
      "targetDataType",
    ],
  };
  const csvData = gridApi.getDataAsCsv(params);
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvData}`);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function ComparePop() {
  const [gridApi, setGridApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onCellValueChanged = () => {
    gridApi.redrawRows();
  };

  return (
    <PopComp className="in-comp">
      <div className="top-bar top-comp">
        <h3>Comparison</h3>
      </div>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <button type="download" onClick={() => downloadCsv(gridApi)}>
            <AiOutlineDownload className="down-icon" />
          </button>
        </div>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowStyle={getRowStyle}
          onGridReady={onGridReady}
          onCellValueChanged={onCellValueChanged}
        />
      </div>
    </PopComp>
  );
}
