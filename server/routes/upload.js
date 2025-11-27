const express = require("express");
const router = express.Router();

const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const communityLeadsModel = require("../models/communityLeads");
const domainLeadsModel = require("../models/domainLeads");
const membersModel = require("../models/members");
const coreMembersModel = require("../models/coreMembers");
const projectModel = require("../models/projects");

const adminAuth = require("../middlewares/adminAuth")

const upload = multer({
    storage: multer.memoryStorage(),
  });

function uploadBufferToCloudinary(buffer, folder = "community") {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder, resource_type: "image" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      streamifier.createReadStream(buffer).pipe(uploadStream);
    });
  }

router.post("/community/:type", upload.single("pfp"), adminAuth ,async (req, res) => {
    const { type } = req.params;
    let TargetModel= null ;

    if (type === "communityleads") {
        TargetModel = communityLeadsModel;
    } else if(type === "domainleads") {
        TargetModel = domainLeadsModel;
    } else if(type === "coremembers"){
        TargetModel = coreMembersModel;
    } else if(type === "members"){
        TargetModel = membersModel;
    } else {
        return res.status(400).json({ message: "Unsupported upload type" });
    }


    const payload = req.body;

    try {
        if (req.file) {
          const result = await uploadBufferToCloudinary(req.file.buffer, type);

          payload.pfp = result.secure_url;
        }
    
        const doc = await TargetModel.create(payload);
        res.status(201).json({ message: "Upload successful", data: doc });
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ message: err.message });
    }
});


router.post("/project", adminAuth ,async (req, res) => {
    const payload = req.body;
    try {
        const doc = await projectModel.create(payload);
        res.status(201).json({ message: "Project created successfully", data: doc });
    } catch (err) {
        console.error("Project creation error:", err);
        res.status(500).json({ message: err.message });
    }
  });

module.exports = router;

