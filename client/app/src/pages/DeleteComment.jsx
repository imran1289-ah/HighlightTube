import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  margin-left: 80px;

  padding: 10px;
`;

const NoButton = styled.button`
  background-color: #e53935;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  width: 100%;
  padding: 5px;
  margin-right: 100px;
`;

const YesButton = styled.button`
  background-color: #1976d2;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  width: 100%;
  padding: 5px;
  margin-right: 100px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 672px;
`;

const DeleteComment = () => {
  const { currentVideo } = useSelector((state) => state.video);
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState([]);
  const path = useLocation().pathname.split("/")[2];

  const navigate = useNavigate();

  function handleNo() {
    navigate(`/video/${currentVideo._id}`);
  }

  const handleYes = async () => {
    try {
      const res = await axios.delete(`/comments/${path}`);
      alert("Comment Deleted Successfully");
    } catch (err) {
      alert("Comment Deleted Unssuccefully. Please try again");
    }

    navigate(`/video/${currentVideo._id}`);
  };

  return (
    <Container>
      <h2>Are you sure you want to delete this comment</h2>
      <Wrapper>
        <YesButton onClick={handleYes}>YES</YesButton>
        <NoButton onClick={handleNo}>NO</NoButton>
      </Wrapper>
    </Container>
  );
};

export default DeleteComment;
