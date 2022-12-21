import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: white;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: white;
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
  color: white;
`;

export const Comment = ({ comment }) => {
  const [channels, setChannels] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannels(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <Container>
      <Details>
        <Name>{channels.name}</Name>
        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
};
