import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  background-color: #fafafa;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  padding: 20px 50px;
  border: 1px solid black;
  gap: 10px;
  color: black;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Api call to authenticate user
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      alert("Welcome back");
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
      alert("Login unsuccessful. Please try again");
    }
  };

  //Api call to create account
  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/signup", { name, email, password });
      const res1 = await axios.post("auth/signin", { name, password });
      dispatch(loginSuccess(res1.data));
      alert(
        "Your account has been created sucesfully, Continue Watching Highlights !!"
      );
      navigate("/");
    } catch (err) {
      alert("Account created unsuccessfully. Please try again");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <TextField
          label="username"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={handleLogin}>
          Sign In
        </Button>
        <Title>Join HighlighTube</Title>
        <TextField
          label="username"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          label="email"
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
