import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Comment } from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Container = styled.div``;

export const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

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
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment}></Comment>
      ))}
    </Container>
  );
};
