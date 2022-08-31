import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: #202020;
`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: white;
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const VideoWrapper = styled.div``;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: white;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: white;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>10,258,005 views * July 12, 2022 </Info>
          <Buttons>
            <Button>
              <ThumbUpIcon></ThumbUpIcon>1.2K
            </Button>
            <Button>
              <ThumbDownIcon></ThumbDownIcon>3
            </Button>
          </Buttons>
        </Details>
        <Hr></Hr>
        <Channel>
          <ChannelInfo>
            <ChannelDetail>
              <ChannelName>NBA</ChannelName>
              <ChannelCounter>1,258,007 subscribers</ChannelCounter>
              <Description>Recap of the 2022 NBA season</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
      </Content>

      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
