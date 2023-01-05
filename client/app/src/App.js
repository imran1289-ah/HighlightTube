import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import EditProfile from "./pages/EditProfile";
import EditVideo from "./pages/EditVideo";
import EditSingleVideo from "./pages/EditSingleVideo";
import SubscribedChannels from "./pages/SubscribedChannels";
import Upload from "./components/Upload";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Menu />
          <Main>
            <Navbar></Navbar>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />}></Route>
                  <Route path="signin" element={<SignIn />}></Route>
                  <Route path="video">
                    <Route path=":id" element={<Video></Video>}></Route>
                  </Route>
                  <Route
                    path="editprofile"
                    element={<EditProfile></EditProfile>}
                  ></Route>
                  <Route
                    path="editvideo"
                    element={<EditVideo></EditVideo>}
                  ></Route>
                  <Route path="">
                    <Route
                      path=":id"
                      element={<EditSingleVideo></EditSingleVideo>}
                    ></Route>
                  </Route>
                  <Route
                    path="subs"
                    element={<SubscribedChannels></SubscribedChannels>}
                  ></Route>
                  <Route path="upload" element={<Upload></Upload>}></Route>
                  <Route path="search" element={<Search></Search>}></Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
