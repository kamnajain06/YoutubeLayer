
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
    }

})

module.exports = mongoose.model("YtSchema", YtSchema);