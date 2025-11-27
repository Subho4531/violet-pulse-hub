require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors")


app.use(express.json());
app.use(cors());



const uploadRoutes = require("./routes/upload");
const fetchRoutes = require("./routes/fetch")


const coreMembersModel = require("./models/coreMembers");
const domainLeadsModel = require("./models/domainLeads");
const membersModel = require("./models/members");
const connectDB = require("./config/db");



app.use("/upload", uploadRoutes);
app.use("/fetch",fetchRoutes );



app.get("/", (req, res) => {
    res.send("hello cutie");
})

connectDB()

app.listen(3000);