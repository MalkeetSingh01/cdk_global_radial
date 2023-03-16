import express from "express";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
import {data} from "./data.js"

const port=8000;

app.post('/get',(req,res)=>{
    // console.log(req.body);
    // res.status(202).json(JSON.stringify(data));
    res.status(202).json(data);
})


app.listen(port,()=>{
    console.log(`-------${port}-------`);
})