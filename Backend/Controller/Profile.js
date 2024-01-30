
const User = require("../Model/User");

exports.getEdAllDetail = async(req,res)=>{ 
    try{
        console.log("1")
        const allEditor = await User.find({accountType:"Editor"});
        if(!allEditor){
            return res.status(400).json({
                success: false,
                message: "Data not found",
                
            })
        }
        console.log("2")

        return res.status(200).json({
            success:true,
            message:"All Data Fetch",
            allEditor
        })
    }
    catch(err){
        return res.status(200).json({
            success:false,
            message:"Data Fetch Error"
        })
    }
   
}


exports.getYtAllDetail = async(req,res)=>{ 
    try{
        const allYoutuber = await User.find({accountType:"YouTuber"});
        if(!allYoutuber){
            return res.status(400).json({
                success: false,
                message: "Data not found",
                
            })
        }
        return res.status(200).json({
            success:true,
            message:"All Data Fetch",
            allYoutuber
        })
    }
    catch(err){
        return res.status(200).json({
            success:false,
            message:"Data Fetch Error"
        })
    }
   
}




exports.getUserDetails=async(req,res)=>{
    try{
        console.log("This is User Details")
       const {userId}= req.body;
       console.log("1st")
       const data = await User.findById(userId);
       console.log("2nd")
       return res.status(200).json({
        success:true,
        data,
        message: "User data retrieved successfully"
       })
    }
    catch(err)
    {
        return result.status(200).json({
            success:false,
            message: "User data not retrieved "
           })
    }
}