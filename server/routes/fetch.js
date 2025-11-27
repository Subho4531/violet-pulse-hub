// routes/getData.js
const express = require("express");
const router = express.Router();

const communityLeads = require("../models/communityLeads");
const domainLeads = require("../models/domainLeads");
const coreMembers = require("../models/coreMembers");
const members = require("../models/members");


const models = {
    communityLeads,
    domainLeads,
    coreMembers,
    members,
};

// FETCH ROUTE
router.get("/:type", async (req, res) => {
    const { type } = req.params;
    const TargetModel = models[type];

    if (!TargetModel) {
        return res.status(400).json({ message: "Invalid type" });
    }

    try {
        const data = await TargetModel.find(); 
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;