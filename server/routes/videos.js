import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  subbed,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/random", random);
router.get("/subscribed", verifyToken, subbed);

export default router;
