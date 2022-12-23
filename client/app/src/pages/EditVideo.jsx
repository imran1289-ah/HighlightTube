import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 56px);
  background-color: #202020;
  color: white;
`;

const EditVideo = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/uservideos/${currentUser._id}`);
      setVideos(res.data);
    };
    fetchVideos();
  });

  const handleDelete = async (videoID) => {
    try {
      const res = await axios.delete(`/videos/${videoID}`);
      alert("video deleted");
    } catch (err) {}
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Video Tile</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos.map((video) => (
              <TableRow
                key={video._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                video={video}
              >
                <TableCell component="th" scope="row">
                  {video.title}
                </TableCell>
                <TableCell>{video.desc}</TableCell>
                <TableCell>
                  <Link
                    to={`/${video._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button variant="contained">Edit</Button>
                  </Link>

                  <Button
                    variant="contained"
                    onClick={() => {
                      handleDelete(video._id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default EditVideo;
