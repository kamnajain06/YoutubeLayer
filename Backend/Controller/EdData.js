
const YtSchema = require("../Model/YtSchema");
exports.getAllTaskData= async(req,res)=>{
    try{
        let data =[];
        const {category}= req.body;
        console.log(category);

        if(category ==="All"){
           
            data = await YtSchema.find({});
        }
        else{
            data = await YtSchema.find({ytCategory:category});
        }
        // console.log("3") 
        // console.log("Data Print",data)
        // console.log("4")
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