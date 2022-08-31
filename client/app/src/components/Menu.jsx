import React from "react";
import styled from "styled-components";
import Icon from "../image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.div`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: grey;
  }
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

export const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Hr></Hr>
        <Item>
          <SportsHockeyIcon></SportsHockeyIcon>Hockey
        </Item>
        <Item>
          <SportsBasketballIcon></SportsBasketballIcon>Basketball
        </Item>
        <Item>
          <SportsSoccerIcon></SportsSoccerIcon>Soccer
        </Item>
        <Item>
          <SportsFootballIcon></SportsFootballIcon>American Football
        </Item>
        <Item>
          <SportsBaseballIcon></SportsBaseballIcon>Baseball
        </Item>
      </Wrapper>
    </Container>
  );
};
