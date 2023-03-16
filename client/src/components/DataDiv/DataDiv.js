import { useState } from "react";
import {
    IconSearch,
    Input,
    INPUT_ICON_POSITIONS,
} from 'cdk-radial';

import { ThemeProvider } from 'styled-components';
import { theme } from 'cdk-radial';
import "./DataDiv.css"
import {getData} from "../../Service/api";


const DataDiv = (props) => {

    const [headerFrames,setHeaderFrames]=useState([]);

    const [sqlData, setSqlData] = useState([]);

    const [sqlQuery, setsqlQuery] = useState("");


    const handleChange = (e) => {
        setsqlQuery(e.target.value);
        console.log(sqlQuery);
    };
    const handleClick =async () => {
        const res=await getData(sqlQuery);
        setSqlData(()=>(res.data));
        const frames=Object.keys(res.data[0]);
        setHeaderFrames(()=>(frames))
    };

    const clearInput=()=>{
        setsqlQuery("");
    }

    const Rowstyle={

    }
    return (

        <div className="compareBox">
            <div className="header">{props.type}</div>
            {/* <div className="searchDiv"> */}
                {/* <input type="search" name="search" value={sqlQuery} onChange={(e)=>{handleChange(e)}}></input> */}
                <div className="searchDiv">
                    <Input
                    className="SearchInput"
                        label="Sql Query"
                        name="sqlInput"
                        onChange={e=>{handleChange(e)}}
                        onInputClear={clearInput}
                        hasClearButton={true}
                        value={sqlQuery}
                        isRequired={true}
                        icon={<IconSearch onClick={()=>{handleClick()}} />} iconPosition={INPUT_ICON_POSITIONS.TRAILING}
                    />

                </div>
            {/* </div> */}
            <div className="dataDiv">
                    <table className="tableDiv">
                       <thead >
                       <tr>
                            {
                                headerFrames.map((colName,index)=>{
                                    return <th>{colName}</th>
                                })
                            }
                        </tr>
                       </thead>
                       <tbody>
                            {
                                sqlData.map((data,index)=>{
                                    let i=0;
                                    let rows=[];
                                    while(i<headerFrames.length){
                                        rows.push(<td>{data[headerFrames[i++]]}</td>);
                                    }
                                    return <tr>{rows}</tr>;
                                })
                            }

                       </tbody>
                    </table>
            </div>
        </div>
    )
}

export default DataDiv;