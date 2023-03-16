import React, { useState } from "react";
import DataPage from "./components/DataPage/DataPage";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import "./App.css";

export default function App() {
//   const [serverCreated, setServerCreated] = useState(true);

  return (
    // <div className="App">
    //   {serverCreated ? (
    //     <>
    //       <Navbar />
    //       <Main setServerCreated={setServerCreated}/>
    //     </>
    //   ) : (
    //     <DataPage
    //       serverCreated={serverCreated}
    //       setServerCreated={setServerCreated}
    //     />
    //   )}
    // </div>
    <Main/>
  );
}
