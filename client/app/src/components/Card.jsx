import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: white;
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: white;
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://cdn.vox-cdn.com/thumbor/ytC-ZCsT-G-M1Fscy7oZUeZE9X0=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19725578/TheRinger_Top25NBAPlayers_2.png"></Image>
        <Title>Basketball</Title>
        <ChannelName>NBA</ChannelName>
        <Info>1 358,000 views * 3 hours ago</Info>
      </Container>
    </Link>
  );
};

export default Card;
