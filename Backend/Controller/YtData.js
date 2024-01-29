
const YtSchema = require("../Model/YtSchema");
exports.getTaskData= async(req,res)=>{
    try{
        console.log("getTaskData Start");
        const {id}=req.user;
        const data = await YtSchema.find({userId:id});
        
        return res.status(200).json({
            success:true,
            data,
            message:"Video Upload Data Found"
        })
    }catch(e){
        console.log(e.message);
        return res.status(500).json({
            success:false,
            message:"Upload Video Data Not Found"
        })
    }
}