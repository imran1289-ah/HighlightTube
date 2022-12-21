import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import UploadIcon from "@mui/icons-material/Upload";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";

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
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Item>
              <HomeIcon />
              Home
            </Item>
          </Link>

          <Hr></Hr>
          {currentUser ? (
            <div>
              <Item>
                <UploadIcon onClick={() => setOpen(true)}></UploadIcon>Upload
                videos
              </Item>
              <Item>
                <VideoLibraryIcon></VideoLibraryIcon>My videos
              </Item>
            </div>
          ) : (
            ""
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};
