import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getBySearch,
  getByTag,
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
router.get("/search", getBySearch);
router.get("/tags", getByTag);

export default router;
