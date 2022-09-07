import { createError } from "../error.js";
import User from "../model/User.js";
import Video from "../model/Video.js";

export const addVideo = async (req, res, next) => {
  const addedVideo = new addedVideo({ userID: req.user.id, ...req.body });
  try {
    const savedVideo = await addedVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "Video does not exist"));
    }
    if (req.user.id === video.userID) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(
        createError(403, "You do not have permission to update this video")
      );
    }
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "Video does not exist"));
    }
    if (req.user.id === video.userID) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("Video has been succesfully deleted");
    } else {
      return next(
        createError(403, "You do not have permission to delete this video")
      );
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const random = async (req, res, next) => {
  try {
    const randomVideos = await Video.aggregate([{ $sample: { size: 20 } }]);
    res.status(200).json(randomVideos);
  } catch (err) {
    next(err);
  }
};

export const subbed = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("+1 Views");
  } catch (err) {
    next(err);
  }
};
