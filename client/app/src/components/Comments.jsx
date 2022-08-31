import React from "react";
import styled from "styled-components";
import { Comment } from "./Comment";

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

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Input placeholder="Add a comment "></Input>
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};
