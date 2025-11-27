const mongoose = require("mongoose")

const communityleads_schema = mongoose.Schema({
    email : String ,
    name : String ,
    about :String ,
    position : String,
    github : String ,
    linkedin :String ,
    insta : String, 
    city : String ,
    country : {type : String , default :"India"} , 
    pfp :  {
        type: String, default: "Not Uploaded",
    },
})

module.exports = mongoose.model("communityleads" , communityleads_schema)