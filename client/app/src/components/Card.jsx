import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 400px;
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

const Card = ({ video }) => {
  const [channels, setChannels] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannels(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src={video.imgUrl}></Image>
        <Title>{video.title}</Title>
        <ChannelName>{channels.name}</ChannelName>
        <Info>{video.views} views</Info>
      </Container>
    </Link>
  );
};

export default Card;
