import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import UploadIcon from "@mui/icons-material/Upload";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Upload from "./Upload";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../redux/userSlice";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Container = styled.div`
  flex: 1;
  background-color: #fafafa;
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: #90caf9;
  }
  color: black;
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

const Image = styled.img`
  width: 38px;
  height: 35px;
`;

export const Menu = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Logout button functionality
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
      alert("You have logged out of your account");
      navigate("/");
    } catch (err) {
      alert("error loggin out. Please try again!");
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Item>
              <Image src="https://cdn.dribbble.com/users/479536/screenshots/14210962/ht_logos_xler8brain_4x.jpg"></Image>
              HighlightTube
            </Item>
          </Link>

          <Hr></Hr>
          {currentUser ? (
            <div>
              <Link
                to="/editprofile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <PersonIcon></PersonIcon>
                  {currentUser.name}
                </Item>
              </Link>
              <Item>
                <LogoutIcon onClick={handleLogout}></LogoutIcon>
                Logout
              </Item>
              <Hr></Hr>

              <Item>
                <Link
                  to="/editvideo"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Item>
                    <VideoLibraryIcon></VideoLibraryIcon>
                    My videos
                  </Item>
                </Link>
              </Item>
              <Link
                to="/subs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <SubscriptionsIcon></SubscriptionsIcon>
                  My subscribed channels
                </Item>
              </Link>
              <Hr></Hr>
              <Link
                to="/upload"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <UploadIcon></UploadIcon>Upload videos
                </Item>
              </Link>
            </div>
          ) : (
            <div>
              <Item>
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Item>
                    <LoginIcon></LoginIcon>
                    Login
                  </Item>
                </Link>
              </Item>
              <Item>
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Item>
                    <AppRegistrationIcon></AppRegistrationIcon>
                    Register
                  </Item>
                </Link>
              </Item>
            </div>
          )}
        </Wrapper>
      </Container>
    </>
  );
};
