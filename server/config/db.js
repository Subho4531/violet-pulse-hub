const mongoose = require("mongoose");

const connectDB = async ()=>{
    mongoose
    .connect(process.env.MONGO_CONNECTION_URL)
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log("Something Went Wrong", err);
    });


}

module.exports = connectDB ;