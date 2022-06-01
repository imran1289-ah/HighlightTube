import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Home.js';
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
