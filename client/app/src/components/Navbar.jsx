import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
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
          <TextField id="outlined-basic" label="Search" variant="outlined" />
        </Box>
        <SearchIcon></SearchIcon>
      </Wrapper>
    </Container>
  );
};
