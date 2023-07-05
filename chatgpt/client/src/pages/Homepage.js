import { Box, Typography, Card, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box p={2}>
      <Typography variant="h4" mb={2} fontWeight="bold">
        Text Generation
      </Typography>
      <Card
        onClick={() => {
          navigate("/summary");
        }}
        sx={{
          boxShadow: 2,
          borderRadius: 5,
          height: 190,
          width: 200,
          "&:hover": {
            border: 2,
            boxShadow: 0,
            borderColor: "primary.dark",
            cursor: "pointer",
          },
        }}
      >
        <DescriptionRounded
          sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
        />
      </Card>
    </Box>
  );
};

export default Homepage;
