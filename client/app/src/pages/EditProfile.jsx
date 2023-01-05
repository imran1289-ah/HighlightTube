import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  background-color: white;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 20px 50px;
  border: 1px solid black;
  gap: 10px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  color: black;
`;

const EditProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState({
    name: currentUser.name,
  });
  const [email, setEmail] = useState({
    email: currentUser.email,
  });
  const [password, setPassword] = useState({
    password: currentUser.password,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    if (
      document.getElementById("pass1").value !==
      document.getElementById("pass2").value
    ) {
      alert("Password did not match. Please try again");

      return;
    }

    try {
      const res = await axios.put(`users/${currentUser._id}`, {
        name,
        email,
        password,
      });

      alert("Profile Updated Succesfully");
      const res1 = await axios.post("auth/signin", { name, password });
      dispatch(loginSuccess(res1.data));
      navigate("/");
    } catch (err) {
      alert("Profile Updated Unsuccesfully. Please try again ");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Update Profile</Title>
        {/* <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        ></Input> */}
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <Input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input> */}
        <TextField
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*         
        <Input
          placeholder="password"
          type="password"
          id="pass1"
          onChange={(e) => setPassword(e.target.value)}
        ></Input> */}
        <TextField
          label="password"
          variant="outlined"
          type="password"
          id="pass1"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Input
          placeholder="Enter password again"
          type="password"
          id="pass2"
        ></Input> */}
        <TextField
          label="Enter password again"
          variant="outlined"
          type="password"
          id="pass2"
        />

        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Wrapper>
    </Container>
  );
};

export default EditProfile;
