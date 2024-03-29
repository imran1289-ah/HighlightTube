import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
  height: 700px;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  //Api call to get videos
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/random`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
