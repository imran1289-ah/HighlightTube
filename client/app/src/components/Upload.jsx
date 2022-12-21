import React from "react";
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
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen()}>X</Close>
        <Title>Upload a new video</Title>
        <input type="text" placeholder="Enter title"></input>
        <input type="text" placeholder="Enter video URL (embedded URL)"></input>
        <input type="text" placeholder="Enter thumbnail URL"></input>
        <input type="text" placeholder="Enter description"></input>
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
