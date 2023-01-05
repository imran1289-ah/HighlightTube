import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../image/logo.png";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #fafafa;
  height: 70px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [q, setQ] = useState("");

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  }

  return (
    <Container>
      <Wrapper>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </Box>
        <Button onClick={() => navigate(`/search?q=${q}`)}>
          <SearchIcon></SearchIcon>
        </Button>
      </Wrapper>
    </Container>
  );
};
