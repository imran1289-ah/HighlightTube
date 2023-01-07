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

const AddComment = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const [comment, setComment] = useState({
    userId: currentUser._id,
    videoId: currentVideo._id,
    desc: "",
  });
  const navigate = useNavigate();

  //Api call to add comment
  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("comments", {
        userId: currentUser._id,
        videoId: currentVideo._id,
        desc: comment.desc,
      });
      alert("Comment Sent Successfully");
    } catch (err) {
      alert("Comment Sent Unsuccessfully. Please try again");
    }
    navigate(`/video/${currentVideo._id}`);
  };

  function handle(e) {
    const newcomment = { ...comment };
    newcomment[e.target.id] = e.target.value;
    setComment(newcomment);
    console.log(newcomment);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Add Comment </Title>
        Video Title : {currentVideo.title}
        <TextField
          label="Comment"
          variant="outlined"
          onChange={(e) => handle(e)}
          type="text"
          id="desc"
          placeholder="Enter Comment"
          value={comment.desc}
          multiline
        />
        <Button variant="contained" onClick={(e) => handleComment(e)}>
          SEND COMMENT
        </Button>
      </Wrapper>
    </Container>
  );
};

export default AddComment;
