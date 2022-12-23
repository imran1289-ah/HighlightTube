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
