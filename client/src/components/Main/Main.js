import Navbar from "../Navbar/Navbar";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import DataDiv from "../DataDiv/DataDiv";
import { ThemeProvider } from 'styled-components';
import { theme } from 'cdk-radial';
import { useState } from "react";
import DataPage from "../DataPage/DataPage";
import { SelectableService } from "ag-grid-community";


const Main=()=>{
    const [serverConn,setServerConn] =useState(false);
    return (
        <ThemeProvider theme={theme}>
        <div className="mainDiv">
            <div className="NavbarDiv"><Navbar/></div>
            <div className="sectionDiv">
                <div className="sidebarDiv"><Sidebar serverForm={serverConn} setServerForm={setServerConn} /></div>
                <div className="sideDiv">
                    <div className="headerDiv">Compare</div>
                    <div className="compareDiv">
                        <DataDiv type="Source"/>
                        <DataDiv type="Target"/>
                    </div>
                </div>
            </div>
            { serverConn && (
                <DataPage
                    serverConn={serverConn}
                    setServerConn ={setServerConn}
                />
            )

            }
        </div>
        </ThemeProvider>
    )
}
export default Main;