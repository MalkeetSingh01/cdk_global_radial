import Navbar from "../Navbar/Navbar";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import DataDiv from "../DataDiv/DataDiv";
import { ThemeProvider } from 'styled-components';
import { theme } from 'cdk-radial';


const Main=()=>{
    return (
        <ThemeProvider theme={theme}>
        <div className="mainDiv">
            <div className="NavbarDiv"><Navbar/></div>
            <div className="sectionDiv">
                <div className="sidebarDiv"><Sidebar/></div>
                <div className="sideDiv">
                    <div className="headerDiv">Compare</div>
                    <div className="compareDiv">
                        <DataDiv type="Source"/>
                        <DataDiv type="Target"/>
                    </div>
                </div>
            </div>
        </div>
        </ThemeProvider>
    )
}
export default Main;