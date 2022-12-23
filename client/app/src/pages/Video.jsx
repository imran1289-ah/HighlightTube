import React from "react";
import styled from "styled-components";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Comments } from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: #202020;
  height: 100%;
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

const VideoFrame = styled.video`
  nax-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  const [channels, setChannels] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoView = await axios.put(`/videos/view/${path}`);
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );

        setChannels(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channels._id)
      ? await axios.put(`/users/unsub/${channels._id}`)
      : await axios.put(`/users/sub/${channels._id}`);
    dispatch(subscription(channels._id));
  };

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  function notSubbed() {
    alert("Please login or create an account to subscribe to this channel");
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="600"
            src={currentVideo.videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views</Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser._id) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}{" "}
              {currentVideo.likes?.length}
            </Button>

            <Button onClick={handleDislike}>
              {currentVideo.dislikes?.includes(currentUser?._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}{" "}
            </Button>
          </Buttons>
        </Details>
        <Hr></Hr>
        <Channel>
          <ChannelInfo>
            <ChannelDetail>
              <ChannelName>{channels.name}</ChannelName>
              <ChannelCounter>
                {channels.subscribers} subscribers
              </ChannelCounter>
              <Description>{currentVideo.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          {currentUser ? (
            <Subscribe onClick={handleSub}>
              {currentUser.subscribedUsers?.includes(channels._id)
                ? "SUBSCRIBED"
                : "SUBSCRIBE"}
            </Subscribe>
          ) : (
            <Subscribe onClick={notSubbed}>SUBSCRIBE</Subscribe>
          )}
        </Channel>
        <Hr></Hr>
        <Comments videoId={currentVideo._id}></Comments>
      </Content>

      {/* <Recommendation>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Recommendation> */}
    </Container>
  );
};

export default Video;
