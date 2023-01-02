import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Comment } from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  const [newComments, setNewComments] = useState([
    {
      userId: currentUser._id,
      videoId: videoId,
      desc: "",
    },
  ]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  return (
    <Container>
      <NewComment>
        <Input id="desc" placeholder="Add a comment" type="text"></Input>
        <Button variant="contained">Send Comment</Button>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment}></Comment>
      ))}
    </Container>
  );
};
