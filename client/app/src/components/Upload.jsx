import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  background-color: #fafafa;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px 50px;
  border: 1px solid black;
  gap: 10px;
  color: black;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Upload = ({ setOpen }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [video, setVideo] = useState({
    userId: currentUser._id,
    title: "",
    desc: "",
    imgUrl: "",
    videoUrl: "",
  });
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("videos", {
        title: video.title,
        desc: video.desc,
        imgUrl: video.imgUrl,
        videoUrl: video.videoUrl,
        views: 0,
        tags: [],
        likes: [],
        dislikes: [],
      });
    } catch (err) {}
    alert("Video Uploaded Succesfully");
    navigate("/");
  };

  function handle(e) {
    const newvideo = { ...video };
    newvideo[e.target.id] = e.target.value;
    setVideo(newvideo);
    console.log(newvideo);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Upload a new video</Title>
        {/* <input
          onChange={(e) => handle(e)}
          type="text"
          id="title"
          value={video.text}
          placeholder="Enter title"
        ></input> */}
        <TextField
          label="Title"
          variant="outlined"
          onChange={(e) => handle(e)}
          type="text"
          id="title"
          value={video.text}
        />
        {/* <input
          onChange={(e) => handle(e)}
          type="text"
          id="videoUrl"
          placeholder="Enter video URL (embedded URL)"
          value={video.videoUrl}
        ></input> */}
        <TextField
          label="Video URL (Embedded URL)"
          variant="outlined"
          onChange={(e) => handle(e)}
          type="text"
          id="videoUrl"
          value={video.videoUrl}
        />
        {/* <input
          onChange={(e) => handle(e)}
          type="text"
          id="imgUrl"
          placeholder="Enter thumbnail URL"
          value={video.imgUrl}
        ></input> */}
        <TextField
          label="Thumbnail URL"
          variant="outlined"
          onChange={(e) => handle(e)}
          type="text"
          id="imgUrl"
          placeholder="Enter thumbnail URL"
          value={video.imgUrl}
        />
        {/* <input
          onChange={(e) => handle(e)}
          type="text"
          id="desc"
          placeholder="Enter description"
          value={video.desc}
        ></input> */}
        <TextField
          label="Description"
          variant="outlined"
          onChange={(e) => handle(e)}
          type="text"
          id="desc"
          placeholder="Enter description"
          value={video.desc}
          multiline
        />
        <Button variant="contained" onClick={(e) => handleUpload(e)}>
          Upload
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
