const mongoose = require("mongoose")

const domainleads_schema = mongoose.Schema({
    email : String ,
    name : String ,
    about :String ,
    domain : String,
    github : String ,
    linkedin :String ,
    insta : String, 
    city : String ,
    country : {type : String , default :"India"} , 
    pfp :  {
        type: String, default: "Not Uploaded",
    },
})

module.exports = mongoose.model("domainleads" , domainleads_schema)