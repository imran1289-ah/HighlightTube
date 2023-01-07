import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  height: 700px;
`;

const SubscribedChannels = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [videos, setVideos] = useState([]);

  //Api call to get subscribed channels videos
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/subscribed/`);
      setVideos(res.data);
    };
    fetchVideos();
  });

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default SubscribedChannels;
