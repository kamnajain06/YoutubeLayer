
const mongoose = require("mongoose")

const YtSchema = new mongoose.Schema({
    ytVidName:{
        type:String,
    },
    ytfileUrl:{
      type:String
    },
    ytCategory:{
      type:String

    },
    ytVidDescription:{
      type:String
    },
    userId:{
      type:String,
    },
    status:{
      type:String,
      default:"All",
      enum:["All","Pending","Assigned","Done"]
    }

})

module.exports = mongoose.model("YtSchema", YtSchema);