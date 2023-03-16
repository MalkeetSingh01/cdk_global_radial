import React, { useState, useEffect, useContext } from "react";
import "./maptable.css";
import Axios from "axios";

const data = [
  { ColumnName: "xyz", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "pqr", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "xyz", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "pqr", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "xyz", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "pqr", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "xyz", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "pqr", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "xyz", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
  { ColumnName: "pqr", DataType: "int" },
  { ColumnName: "abc", DataType: "char" },
];

export default function MapTable(props) {
  // const [data, setData] = useState([]);

  // const getApiData = async () => {
  //   const res = await Axios.get("http://localhost:8000/sql/query1");
  //   setData(res.data);
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    <table id="datatable">
      <thead>
        <tr>
          <th>Column Name</th>
          <th>Data Type</th>
        </tr>
      </thead>

      <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Field}</td>
              <td>{val.Type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
