import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/commerce.png";
const Home = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography component={Link} to="/dashboard" variant="h6" color="inherit">
            <img src={logo} alt="commerce.js" height="25px" /> Test
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Home;
