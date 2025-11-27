const mongoose = require(mongoose) ;

const projectSchema = new mongoose.Schema({
    name:String ,
    description:String ,
    domain : [String],
    github : {
        type: String,
        default: null
    },
    live : {
        type: String,
        default: null
    },

    status : {
        type: String,
        default: "Completed"
    }

    });

module.exports = mongoose.model('project' , projectSchema) ;
