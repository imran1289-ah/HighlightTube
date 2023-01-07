import React from "react";
import styled from "styled-components";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Comments } from "../components/Comments";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AddComment from "./AddComment";

const Container = styled.div`
  display: flex;
  gap: 24px;
  background-color: white;
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
  background-color: #1976d2;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  margin-right: 5px;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: black;
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
  color: black;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  color: black;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: black;
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

const Video = ({ type }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];
  const [channels, setChannels] = useState({});
  const [videos, setVideos] = useState([]);

  //Api call to get video details
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

  //api call to get reccomended videos
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/recommend`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  //api call to subscribe to channel
  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channels._id)
      ? await axios.put(`/users/unsub/${channels._id}`)
      : await axios.put(`/users/sub/${channels._id}`);
    dispatch(subscription(channels._id));
  };

  //api call to like video
  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  //api call to dislike video
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  //if user not logged in
  function notSubbed() {
    alert("Please login or create an account to subscribe to this channel");
  }

  //if user not logged in
  function notLiked() {
    alert("Please login or create an account to like/dislike this video");
  }

  //if user not logged in
  function notComment() {
    alert("Please login or create an account to comment on this video");
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="930"
            height="500"
            src={currentVideo.videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views</Info>
          <Buttons>
            <FileDownloadIcon></FileDownloadIcon>
            <ShareIcon></ShareIcon>
            {currentUser ? (
              <Button onClick={handleLike}>
                {currentVideo.likes?.includes(currentUser._id) ? (
                  <ThumbUpIcon />
                ) : (
                  <ThumbUpIcon />
                )}{" "}
                {currentVideo.likes?.length}
              </Button>
            ) : (
              <Button>
                {currentVideo.likes?.length}
                <ThumbUpIcon onClick={notLiked} />
              </Button>
            )}

            {currentUser ? (
              <Button onClick={handleDislike}>
                {currentVideo.dislikes?.includes(currentUser?._id) ? (
                  <ThumbDownIcon />
                ) : (
                  <ThumbDownIcon />
                )}{" "}
                {currentVideo.dislikes?.length}
              </Button>
            ) : (
              <Button>
                {currentVideo.dislikes?.length}
                <ThumbDownIcon onClick={notLiked} />
              </Button>
            )}
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
            <div>
              <Subscribe onClick={handleSub}>
                {currentUser.subscribedUsers?.includes(channels._id)
                  ? "SUBSCRIBED"
                  : "SUBSCRIBE"}
              </Subscribe>
              <Link
                to="/addcomment"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Subscribe>SEND COMMENT</Subscribe>
              </Link>
            </div>
          ) : (
            <div>
              <Subscribe onClick={notSubbed}>SUBSCRIBE</Subscribe>
              <Subscribe onClick={notComment}>SEND COMMENT</Subscribe>
            </div>
          )}
        </Channel>
        <Hr></Hr>
        <Comments videoId={currentVideo._id}></Comments>
      </Content>

      <Recommendation>
        {videos.map((video) => (
          <Button onClick={refreshPage}>
            <Card key={video._id} video={video} />
          </Button>
        ))}
      </Recommendation>
    </Container>
  );
};

export default Video;
