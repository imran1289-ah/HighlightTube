import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  background-color: #202020;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #202020;
  padding: 20px 50px;
  border: 1px solid white;
  gap: 10px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  color: white;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: grey;
`;

const EditSingleVideo = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.user);
  const [title, setTitle] = useState({
    name: currentVideo.title,
  });
  const [description, setDescription] = useState({
    email: currentVideo.description,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
    } catch (err) {}
  };

  return (
    // <Container>
    //   <Wrapper>
    //     <Title>Edit Video</Title>
    //     <Input
    //       placeholder="title"
    //       onChange={(e) => setTitle(e.target.value)}
    //     ></Input>
    //     <Input
    //       placeholder="description"
    //       onChange={(e) => setDescription(e.target.value)}
    //     ></Input>
    //     <Button onClick={handleUpdate}>Update</Button>
    //   </Wrapper>
    // </Container>
    <div>Yo</div>
  );
};

export default EditSingleVideo;
