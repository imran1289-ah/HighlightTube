import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

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
  color: black;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: black;
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
  color: black;
`;

const Subscribe = styled.button`
  background-color: #e53935;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  width: 7%;
  padding: 5px;
  position: absolute;
  right: 10;
  margin-left: 5px;
`;

const Wrapper = styled.div`
  display: flex;
`;

export const Comment = ({ comment }) => {
  const [channels, setChannels] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannels(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  function checkDeleteComment() {
    if (comment.userId === currentUser._id) {
      navigate(`/comments/${comment._id}`);
    } else {
      alert("You can only delete comments posted by you");
    }
  }

  return (
    <Container>
      <Details>
        <Name>{channels.name}</Name>
        <Wrapper>
          <Text>{comment.desc}</Text>
          {currentUser ? (
            <DeleteIcon onClick={checkDeleteComment}></DeleteIcon>
          ) : (
            ""
          )}
        </Wrapper>
      </Details>
    </Container>
  );
};
