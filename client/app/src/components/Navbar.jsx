import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../image/logo.png";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #202020;
  height: 56px;
`;

const Img = styled.div`
  height: 25px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: white;
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
    padding : 5px 15px;
    background-color:transparent;
    border:1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius:3px;
    font-weight: 500;
    cursor:pointer;
    display:flex
    align-items:flex-end; 
    gap:5px;

`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>HighlighTube</Logo>
        <Button>
          <Link
            to="/signin"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            LOGIN
          </Link>
        </Button>
      </Wrapper>
    </Container>
  );
};
