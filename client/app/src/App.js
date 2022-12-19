import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
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
                  <Route index element={<Home type="random" />}></Route>
                  <Route
                    index
                    path="trends"
                    element={<Home type="trend" />}
                  ></Route>
                  <Route
                    index
                    path="subscriptions"
                    element={<Home type="sub" />}
                  ></Route>
                  <Route path="signin" element={<SignIn />}></Route>
                  <Route path="/video/test" element={<Video />}></Route>
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
