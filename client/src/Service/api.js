import axios from "axios";
const URL="http://localhost:8000";

export const getData=async(sql)=>{
    try {
        return await axios.post(`${URL}/get`,sql);       
    } catch (error) {
        console.log("Error on getData api--",error)
    }
}
