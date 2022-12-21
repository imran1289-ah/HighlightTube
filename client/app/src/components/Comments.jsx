import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Comment } from "./Comment";
import axios from "axios";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const Comments = ({ videoId }) => {
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
      <NewComment>
        <Input placeholder="Add a comment "></Input>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment}></Comment>
      ))}
    </Container>
  );
};
