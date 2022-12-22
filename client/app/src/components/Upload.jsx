import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: #202020;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: white;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #202020;
  color: white;
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

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("videos", {
        title: video.title,
        desc: video.title,
        imgUrl: video.imgUrl,
        videoUrl: video.videoUrl,
        views: 0,
        tags: [],
        likes: [],
        dislikes: [],
      });
    } catch (err) {}
    alert("Video Uploaded Succesfully");
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
        <Close onClick={() => setOpen()}>X</Close>
        <Title>Upload a new video</Title>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="title"
          value={video.text}
          placeholder="Enter title"
        ></input>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="videoUrl"
          placeholder="Enter video URL (embedded URL)"
          value={video.videoUrl}
        ></input>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="imgUrl"
          placeholder="Enter thumbnail URL"
          value={video.imgUrl}
        ></input>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="desc"
          placeholder="Enter description"
          value={video.desc}
        ></input>
        <Button onClick={(e) => handleUpload(e)}>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
