import { Box, Typography, Card, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box p={2}>
      <Typography>Welcome to Home Page</Typography>
    </Box>
  );
};

export default Homepage;
