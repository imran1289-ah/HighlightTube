import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  background-color: white;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 20px 50px;
  border: 1px solid black;
  gap: 10px;
  color: black;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const EditSingleVideo = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [title, setTitle] = useState({});
  const [desc, setDescription] = useState({});
  const path = useLocation().pathname.split("/")[1];

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`videos/${path}`, {
        title,
        desc,
      });

      alert("Video Updated Successfully");
      navigate("/editvideo");
    } catch (err) {
      alert("Video Updated Unsuccessfully. Please try again");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Update Video</Title>
        {/* <Input
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        ></Input> */}
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <Input
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></Input> */}
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Wrapper>
    </Container>
  );
};

export default EditSingleVideo;
