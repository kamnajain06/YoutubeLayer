
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