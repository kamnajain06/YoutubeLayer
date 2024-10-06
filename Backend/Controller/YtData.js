
const YtSchema = require("../Model/YtSchema");
exports.getTaskData= async(req,res)=>{
    try{
        let data=[];
        const {id}=req.user;
        const {status,assignEmail}=req.body;


        const response = await YtSchema.findOneAndUpdate(
            {userId:id},
            { $set: { assignEmail: assignEmail }, $pull: { requestedMail: assignEmail } },
            { new: true }
          );
        
        data = await YtSchema.find({userId:id,status:status}); 
    
        return res.status(200).json({
            success:true,
            data,
            message:"Video Upload Data Found"
        })
    }catch(e){
        return res.status(500).json({
            success:false,
            message:"Upload Video Data Not Found"
        })
    }
}