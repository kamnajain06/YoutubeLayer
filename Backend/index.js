const express= require('express');
const app = express();
const dbConnect =require("./Config/Database")
const userRoute = require("./Route/UserRouter")

const port =process.env.PORT || 3000;


const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use("/api/v1",userRoute);


dbConnect();


app.listen(port,()=>{
    console.log('listening on port',port);
});