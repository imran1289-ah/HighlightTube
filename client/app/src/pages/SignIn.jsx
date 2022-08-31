import React from "react";
import styled from "styled-components";

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
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: grey;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Input placeholder="username"></Input>
        <Input placeholder="password" type="password"></Input>
        <Button>Login</Button>
        <Title>Join HighlighTube</Title>
        <Input placeholder="username"></Input>
        <Input placeholder="email"></Input>
        <Input placeholder="password" type="password"></Input>
        <Button>Register</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
