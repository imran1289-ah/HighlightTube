import axios from "axios";
import React, { useState, useEffect } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("auth/signin", { name, password });
      console.log(res.data);
    } catch (err) {}
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={handleLogin}>Login</Button>
        <Title>Join HighlighTube</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button>Register</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
