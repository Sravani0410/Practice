import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
// import { useTheme } from "@emotion/react";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight="bold">
        Chat GPT
      </Typography>
      {loggedIn ? (
        <Link to="/login" onClick={handleLogout} p={1}>
          Logout
        </Link>
      ) : (
        <>
          <Link to="/register" p={1}>
            Sign Up
          </Link>
          <Link to="/login" p={1}>
            Sign In
          </Link>
        </>
      )}

      {/* <NavLink to="/register" p={1}>
        Sign Up
      </NavLink>
      <NavLink to="/login" p={1}>
        Sign In
      </NavLink> */}
    </Box>
  );
};

export default Navbar;
