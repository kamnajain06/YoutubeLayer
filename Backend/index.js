const express= require('express');
const app = express();
const dbConnect =require("./Config/Database")
const cloudinaryConnect = require("./Config/Cloudinary");
const userRoute = require("./Route/UserRouter")
const YtRoute = require("./Route/YtRouter");
const EdRoute = require("./Route/EdRoute");
const port =process.env.PORT || 3000;
const fileUpload = require("express-fileupload");



const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
   
app.use("/api/v1",userRoute);
app.use("/api/v1",YtRoute);
app.use("/api/v1",EdRoute);


dbConnect();
cloudinaryConnect();

app.get('/', () => console.log("Server is running fine"));
app.listen(port,()=>{
    console.log('listening on port',port);
});
